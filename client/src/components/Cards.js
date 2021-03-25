import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
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
  const [isFilterDisplayed, setFilterDisplayed] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/cards`, {
      method: 'POST',
      body: JSON.stringify({
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
    fetch(`/api/spaced`, {
      method: 'PATCH',
      body: JSON.stringify({
        _id: paginatedData.currentData()[0]._id,
        status: event.target.title,
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

  const filteredCards = cards.filter(card => moment(card.dateToNextBeRevised).isBefore(moment()));
  const filteredPaginatedData = usePagination(filteredCards, 1);
  const allPaginatedData = usePagination(cards, 1);
  const paginatedData = isFilterDisplayed ? allPaginatedData : filteredPaginatedData;
  
  const canViewAssessmentButtons =
    (paginatedData.currentData().length !== 0) && 
    (paginatedData.currentPage <= paginatedData.maxPage);

  const canViewSuccessMessage =
    (paginatedData.maxPage !== 0) &&
    (paginatedData.currentPage > paginatedData.maxPage);

  const canViewNoCardsMessage =
    (allPaginatedData.currentData().length === 0) &&
    !canViewSuccessMessage;
  
  const canViewNoFilteredCardsMessage =
    (paginatedData.currentData().length === 0) &&
    !canViewSuccessMessage && !canViewNoCardsMessage;

  return (
    <section className="cards">
      <h2>{topicName}</h2>

      {cards.length !== 0 &&
        paginatedData.currentData().map(card =>
          <Card key={card._id} card={card} />
        )}

      {canViewNoFilteredCardsMessage &&
        <div>
          <p>There are no cards that need revising at the moment, but you can revise anyway if you like</p>
          <Button
            onClick={() => setFilterDisplayed(true)}>Show all cards</Button>
        </div>}

      {canViewNoCardsMessage &&
        <div>
          <p>You don't have any cards yet - please add some!</p>
        </div>}

      {canViewAssessmentButtons &&
        <div>
          <Button
            title="unsure"
            onClick={handleUpdateCard}>I don't remember this at all</Button>
          <Button
            title="neutral"
            onClick={handleUpdateCard}>I barely know this </Button>
          <Button
            title="confident"
            onClick={handleUpdateCard}>I'm confident I know this</Button>
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
          <span>Add new card <FontAwesomeIcon icon={faPlus} aria-hidden="true"/></span> :
          <span>Hide <FontAwesomeIcon icon={faMinus} aria-hidden="true"/></span>}
      </Button>

      {isFormDisplayed && <AddNewForm
        onSubmit={handleSubmit}>
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
        </AddNewForm>}

      <p>{redirectMessage}</p>

    </section>
  )
};
