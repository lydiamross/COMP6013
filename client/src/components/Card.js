import React, { useState } from 'react';
import { CardContainer, CardContent } from '../styled';

export const Card = ({ card }) => {
  const [showFront, setShowFront] = useState(true);

  const onChange = () => {
    setShowFront(!showFront);
  }

  return (
    <CardContainer key={card._id}>
      {showFront
        ?
        <div>
          <p>Question</p>
          <CardContent
            showFront={showFront}
            onClick={onChange}>
            <h3>{card.question}</h3>
          </CardContent>
        </div>
        :
        <div>
          <p>Answer</p>
          <CardContent
            showFront={showFront}
            onClick={onChange}>
            <h3>{card.answer}</h3>
          </CardContent>
        </div>
      }
    </CardContainer>
  );
};
