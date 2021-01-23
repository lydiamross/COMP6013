import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  const [cards, setCards] = useState([]);
  return (
    <div>
      <h2>Cards</h2>
      <div className="cards">
        {cards.map(card =>
          <div key={card._id}>
            <h3>{card.question}</h3>
            <p>{card.answer}</p>
          </div>
        )}
      </div>
    </div>
  )
};

export default Cards;
