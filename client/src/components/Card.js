import React, { useState } from 'react';
import { CardContainer, CardQuestion, CardAnswer } from '../styled';

export const Card = ({ card }) => {
  const [showFront, setShowFront] = useState(true);

  const onChange = () => {
    setShowFront(!showFront);
  }

  return (
    <CardContainer key={card._id}>
      {showFront
        ?
        <CardQuestion
          onClick={onChange}>
          <p>{card.question}</p>
        </CardQuestion>
        :
        <CardAnswer
          onClick={onChange}>
          <p>{card.answer}</p>
        </CardAnswer>
      }
    </CardContainer>
  );
};
