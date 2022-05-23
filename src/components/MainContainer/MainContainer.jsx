import Nav from '../Nav/Nav';
import About from '../../pages/About';
import { Route, Routes } from 'react-router-dom';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';

const variants = {
  enter: () => {
    return {
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const MainContainer = () => {
  const names = useContext(GlobalContext);
  const [navSpecs] = names.navSpecs;
  console.log(navSpecs);
  return (
    <div className='main-container'>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
        >
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default MainContainer;
