import React from 'react';  
import './App.css';
import MainContainer from './components/MainContainer';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(true);
  function handleArrowButton() {
    setState(false)
  }
  return (
    <div>
      {state ? <MainPage onClick1={handleArrowButton} /> : <MainContainer />}
    </div>
    
  );
}

export default App