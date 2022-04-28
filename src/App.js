import React from 'react';
import './App.css';
// import MainContainer from './components/MainContainer';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
