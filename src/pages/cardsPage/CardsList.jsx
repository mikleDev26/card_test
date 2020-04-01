import React, { useContext } from 'react';
import { CardsContext } from '../../context/CardsContextProvider';
import CardRow from '../../components/CardRow/CardRow';

const CardsList = () => {
  const { cards } = useContext(CardsContext);
  return (
    <div>
      {!cards.length ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => <CardRow key={card.id} card={card} />))}
    </div>
  );
};

export default CardsList;
