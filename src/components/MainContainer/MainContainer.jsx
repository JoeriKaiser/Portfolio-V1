import Nav from '../Nav/Nav';
import About from '../../pages/About';
import { Route, Routes } from 'react-router-dom';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';

const MainContainer = () => {
  const names = useContext(GlobalContext);
  const [navSpecs] = names.navSpecs;
  return (
    <div className='main-container'>
      <Nav />
      <Routes>
        <Route path='' element={<About key={navSpecs[0].id} />}></Route>
        <Route
          path='projects'
          element={<Projects key={navSpecs[1].id} />}
        ></Route>
        <Route
          path='contact'
          element={<Contact key={navSpecs[2].id} />}
        ></Route>
      </Routes>
    </div>
  );
};
export default MainContainer;
