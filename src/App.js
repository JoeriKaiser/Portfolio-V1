import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import { AnimatePresence } from 'framer-motion';

function App({ key }) {
  const location = useLocation();
  return (
    <div className='App'>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<MainPage />}></Route>
          <Route path='/main-page/*' element={<MainContainer />}></Route>
          <Route path='/main-page/contact/linkedin' element={(<Linkedin />)}></Route>
          <Route path='/main-page/contact/github' element={(<Github />)}></Route>
          </Routes>
        </AnimatePresence>
    </div>
  );
}

function Linkedin() {
  // eslint-disable-next-line no-lone-blocks
  {window.location.replace('https://www.linkedin.com/in/joeri-kaiser-1348881b2/')}
  return null
}

function Github() {
  // eslint-disable-next-line no-lone-blocks
  {window.location.replace('https://github.com/JoeriKaiser')}
  return null
}

export default App;
