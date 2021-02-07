import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      setRedirectMessage(
        <div>
          <h3>Topic not selected</h3>
          <p>Please return <Link to="/">Home</Link></p>
        </div>
      );
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
