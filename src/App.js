import React, { useState } from 'react';
import image from './images/expand-vertical-4.svg';
import { AppContainer } from './App.styles';
import { Collapsible } from './components';

function App() {
  const [collapsibleState, setCollapsibleState] = useState(false);


  return (
    <AppContainer>
      <header>
        <img src={image} alt="React 101" />
        <h1 onClick={() => setCollapsibleState(!collapsibleState)}>Collapsible</h1>
      </header>
      {
        collapsibleState && <Collapsible />
      }
    </AppContainer>
  );
}

export default App;
