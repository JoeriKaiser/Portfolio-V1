import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';

export const Nav = () => {
  const navContext = useContext(GlobalContext);
  const [navSpecs] = navContext.navSpecs;
  return (
    <AnimatePresence>
      <motion.div>
        <nav>
          <Link id={navSpecs[0].id} to={navSpecs[0].link}>
            {navSpecs[0].name}
          </Link>
          <Link id={navSpecs[1].id} to={navSpecs[1].link}>
            {navSpecs[1].name}
          </Link>
          <Link id={navSpecs[2].id} to={`${navSpecs[2].link}`}>
            {navSpecs[2].name}
          </Link>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
export default Nav;
