import React, { useState, useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { AddNewForm, FormInput, Button, CardContainer } from '../styled';
import { usePagination } from '../utils/usePagination';
import { usePersistedState } from '../utils/usePersistedState';

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
  const [cardQuestion, setCardQuestion] = useState('');
  const [cardAnswer, setCardAnswer] = useState('');
  const [isFormDisplayed, setFormDisplay] = useState(false);
  const [topicPath, setPath] = usePersistedState('topicPath', null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [redirectMessage, setRedirectMessage] = useState();

  const handleNextButton = (event, page) => paginatedData.next(page);
  const handlePreviousButton = (event, page) => paginatedData.previous(page);
  const handleFormDisplay = () => setFormDisplay(!isFormDisplayed);

  useEffect(() => {
    setPath(props.location.aboutProps !== undefined ? props.location.aboutProps.topicId : topicPath);
    fetch(`/api/cards/${topicPath}`)
      .then(response => response.json())
      .then(setCards)
      .catch(error => {
        console.error('ERROR:', error);
      });
  }, [props.location.aboutProps, topicPath, setPath]);

  const paginatedData = usePagination(cards, 1);

  const handleSubmit = (event) => {
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
        setRedirectMessage('Card added');
      })
      .catch(error => {
        console.error('ERROR:', error);
        setRedirectMessage('Error - Card not added');
      });
  };

  return (
    <>
      <h2>Cards</h2>
      <div className="cards">
        {cards.length !== 0 &&
          paginatedData.currentData().map(card =>
            <Card key={card._id} card={card} />
          )}
      </div>
      <div>
        <Button onClick={handlePreviousButton}>Previous</Button>
        <Button onClick={handleNextButton}>Next</Button>
      </div>
      <Button
        type="submit"
        onClick={handleFormDisplay}
        >
        {!isFormDisplayed ? 
          <span>Add new <FontAwesomeIcon icon={faPlus} /></span> :
          <span>Hide <FontAwesomeIcon icon={faMinus} /></span>}
      </Button>
      {isFormDisplayed && <AddNewForm>
        <form onSubmit={handleSubmit}>
          <label htmlFor="question">Question: </label>
          <FormInput
            type="text"
            name="question"
            value={cardQuestion}
            onChange={({ target: { value } }) => setCardQuestion(value)} />
          <br />
          <label htmlFor="answer">Answer: </label>
          <FormInput
            type="text"
            name="answer"
            value={cardAnswer}
            onChange={({ target: { value } }) => setCardAnswer(value)} />
          <br />
          <Button
            type="submit"
            disabled={!cardQuestion || !cardAnswer}>OK</Button>
        </form>
      </AddNewForm>}
      <p>{redirectMessage}</p>
    </>
  )
};
