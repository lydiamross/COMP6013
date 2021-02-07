import React, { useState, useEffect } from 'react';
import { NotFound } from './NotFound';

function Card({ card }) {
  return (
    <div key={card._id}>
      <h3>{card.question}</h3>
      <p>{card.answer}</p>
    </div> 
  )
};

export const Cards = (props) => {
  const [cards, setCards] = useState([]);
  const [redirectMessage, setRedirectMessage] = useState('');

  useEffect(() => {
    if (props.location.aboutProps !== undefined) {
      fetch(`/api/cards/${props.location.aboutProps.topicId}`)
      .then(res => res.json())
      .then(setCards);
    } else {
      setRedirectMessage(<NotFound />)
    }
  }, []);

  return (
    <>
      <h2>Cards</h2>
      <div className="cards">
        {cards.map(card =>
          <Card key={card._id} card={card} />
        )}
      </div>
      <div>{redirectMessage}</div>
    </>
  )
};
