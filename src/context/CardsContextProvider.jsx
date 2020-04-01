import React, { createContext, useState } from 'react';
import data from './data/data.json';


export const CardsContext = createContext();

// eslint-disable-next-line react/prop-types
const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(data);

  return (
    <CardsContext.Provider value={{ cards: cards.data }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
