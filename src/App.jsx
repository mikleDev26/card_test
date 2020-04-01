import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardsPage from './pages/cardsPage/CardsPage';
import CardsContextProvider from './context/CardsContextProvider';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <CardsContextProvider>
        <CardsPage />
      </CardsContextProvider>
    </div>
  );
}

export default App;
