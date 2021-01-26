import React, { useState, useEffect } from 'react'

function Card({ card }) {
  return (
    <div key={card._id}>
      <h3>{card.question}</h3>
      <p>{card.answer}</p>
    </div> 
  )
};

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(setCards);
  }, []);

  return (
    <>
      <h2>Cards</h2>
      <div className="cards">
        {cards.map(card =>
          <Card key={card._id} card={card} />
        )}
      </div>
    </>
  )
};
