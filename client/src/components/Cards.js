import { useState, useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddNewForm, FormInput, Button, CardContainer } from '../styled';

function Card({ card }) {
  return (
    <CardContainer key={card._id}>
      <h3>{card.question}</h3>
      <p>{card.answer}</p>
    </CardContainer> 
  )
};

function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(localStorage.getItem(key) || defaultValue);
  useEffect(() => { localStorage.setItem(key, state) }, [key, state]);
  return [state, setState];
}

export const Cards = (props) => {
  const [cards, setCards] = useState([]);
  const [cardQuestion, setCardQuestion] = useState('');
  const [cardAnswer, setCardAnswer] = useState('');
  const [isFormDisplayed, setFormDisplay] = useState(false);
  const [topicPath, setPath] = usePersistedState('topicPath', undefined);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function handleFormDisplay() {
    setFormDisplay(!isFormDisplayed);
  };

  useEffect(() => {
    if (props.location.aboutProps !== undefined) {
      setPath(props.location.aboutProps.topicId);
    } else if (topicPath !== undefined) {
      setPath(topicPath);
    }
    fetch(`/api/cards/${topicPath}`)
      .then(res => res.json())
      .then(setCards)
      .catch(error => {
        console.error('ERROR:', error);
      });
  }, [props.location.aboutProps, topicPath, setPath]);

  const onClick = (event) => {
    event.preventDefault();
    fetch(`/api/cards`, {
      method: 'PUT',
      body: JSON.stringify({
        type: 'simple',
        topicId: topicPath,
        question: cardQuestion,
        answer: cardAnswer
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then(newCard => {
        cards.push(newCard);
        setCards(cards);
        setCardQuestion('');
        setCardAnswer('');
        setFormDisplay(!isFormDisplayed);
        forceUpdate();
      })
      .catch(error => {
        console.error('ERROR:', error);
      });
  }

  return (
    <>
      <h2>Cards</h2>
      <div className="cards">
        {cards.length !== 0 &&
          cards.map(card =>
            <Card key={card._id} card={card} />
        )}
      </div>
      <Button
        type="submit"
        onClick={handleFormDisplay}
        disabled={isFormDisplayed}>
        Add new <FontAwesomeIcon icon={faPlus} />
      </Button>
      {isFormDisplayed && <AddNewForm>
        <form onSubmit={onClick}>
          <label htmlFor="question">Question: </label>
          <FormInput
            type="text"
            name="question"
            value={cardQuestion}
            onChange={({ target: { value } }) => setCardQuestion(value)}
          />
          <br />
          <label htmlFor="answer">Answer: </label>
          <FormInput
            type="text"
            name="answer"
            value={cardAnswer}
            onChange={({ target: { value } }) => setCardAnswer(value)}
          />
          <br />
          <Button
            type="submit"
            disabled={!cardQuestion || !cardAnswer}
          >OK</Button>
        </form>
      </AddNewForm>}
    </>
  )
};
