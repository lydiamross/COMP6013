import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
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

export const Cards = (props) => {
  const [cards, setCards] = useState([]);
  const [redirectMessage, setRedirectMessage] = useState('');
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [cardQuestion, setCardQuestion] = useState('');
  const [cardAnswer, setCardAnswer] = useState('');
  const [isMenuDisplayed, setMenuDisplay] = useState(false);

  function changeMenuDisplay() {
    setMenuDisplay(!isMenuDisplayed);
  };

  useEffect(() => {
    if (props.location.aboutProps !== undefined) {
      fetch(`/api/cards/${props.location.aboutProps.topicId}`)
      .then(res => res.json())
      .then(setCards);
    } else {
      setRedirectMessage(
        <div>
          <h3>Topic not selected</h3>
          <p>Please return <Link to="/">Home</Link></p>
        </div>
      );
    }
  }, []);

  const onClick = () => {
    fetch(`/api/cards`, {
      method: 'PUT',
      body: JSON.stringify({
        name: cardQuestion,
        description: cardAnswer,
        type: 'simple',
        topicId: props.location.aboutProps.topicId,
        question: cardQuestion,
        answer: cardAnswer
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then(newCard => {
        cards.push(newCard);
        setCards(cards);
        forceUpdate();
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
        onClick={changeMenuDisplay}
        disabled={isMenuDisplayed}>
        Add new <FontAwesomeIcon icon={faPlus} />
      </Button>
      {isMenuDisplayed && <AddNewForm>
        <form onSubmit={onClick}>
          <label for="question">Question: </label>
          <FormInput
            type="text"
            name="question"
            value={cardQuestion}
            onChange={({ target: { value } }) => setCardQuestion(value)}
          />
          <br />
          <label for="answer">Answer: </label>
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
      <div>{redirectMessage}</div>
    </>
  )
};
