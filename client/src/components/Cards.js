import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { AddNewForm, FormInput, Button } from '../styled';
import { usePagination } from '../utils/usePagination';
import { usePersistedState } from '../utils/usePersistedState';
import { Card } from './Card';

export const Cards = (props) => {
  const [cards, setCards] = useState([]);
  const [cardQuestion, setCardQuestion] = useState('');
  const [cardAnswer, setCardAnswer] = useState('');
  const [isFormDisplayed, setFormDisplay] = useState(false);
  const [topicPath, setTopicPath] = usePersistedState('topicPath', null);
  const [topicName, setTopicName] = usePersistedState('topicName', null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [redirectMessage, setRedirectMessage] = useState();

  const handleFormDisplay = () => {
    setFormDisplay(!isFormDisplayed);
    setRedirectMessage('');
  };

  useEffect(() => {
    setTopicPath(props.location.aboutProps !== undefined ? props.location.aboutProps.topicId : topicPath);
    setTopicName(props.location.aboutProps !== undefined ? props.location.aboutProps.topicName : topicName);
    fetch(`/api/cards/${topicPath}`)
      .then(response => response.json())
      .then(setCards)
      .catch(error => {
        console.error('ERROR:', error);
      });
  }, [props.location.aboutProps, topicPath, topicName, setTopicPath, setTopicName]);

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

  const handleUpdateCard = (event, page) => {
    event.preventDefault();
    fetch(`/api/cards`, {
      method: 'PATCH',
      body: JSON.stringify({
        _id: paginatedData.currentData()[0]._id,
        type: 'simple',
        updatedDate: new Date(),
        status: 'Neutral',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then(() => paginatedData.next(page))
      .catch(error => {
        console.error('ERROR:', error);
        setRedirectMessage('Error');
      });
  };
  const canViewAssessmentButtons =
    (paginatedData.currentData().length !== 0) && 
    (paginatedData.currentPage <= paginatedData.maxPage);

  const canViewSuccessMessage =
    (paginatedData.maxPage !== 0) &&
    (paginatedData.currentPage > paginatedData.maxPage);

  return (
    <div className="cards">
      <h2>{topicName}</h2>
      {cards.length !== 0 &&
        paginatedData.currentData().map(card =>
          <Card key={card._id} card={card} />
        )}
      {canViewAssessmentButtons &&
        <div>
          <Button
            onClick={handleUpdateCard}
            title="0">I don't know this at all</Button>
          <Button
            onClick={handleUpdateCard}
            title="1">I sort of know this </Button>
          <Button
            onClick={handleUpdateCard}
            title="2">I'm really confident with this one</Button>
        </div>}
      {canViewSuccessMessage &&
        <div>
          <div>Well done!</div>
          <p>Please return <Link to="/">Home</Link></p>
        </div>}
      <Button
        type="submit"
        onClick={handleFormDisplay}>
        {!isFormDisplayed ?
          <span>Add new card <FontAwesomeIcon icon={faPlus} /></span> :
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
    </div>
  )
};
