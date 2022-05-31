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
          <motion.div whileHover={{ y: 4 }}>
            <Link id={navSpecs[0].id} to={navSpecs[0].link}>
              <motion.a
                whileHover={{
                  textShadow: '2px 2px 12px rgba(228,228,228,0.2)',
                }}
              >
                {navSpecs[0].name}
              </motion.a>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: 4 }}>
            <Link id={navSpecs[1].id} to={navSpecs[1].link}>
              <motion.a
                whileHover={{
                  textShadow: '2px 2px 12px rgba(228,228,228,0.2)',
                }}
              >
                {navSpecs[1].name}
              </motion.a>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: 4 }}>
            <Link id={navSpecs[2].id} to={`${navSpecs[2].link}`}>
              <motion.a
                whileHover={{
                  textShadow: '2px 2px 12px rgba(228,228,228,0.2)',
                }}
              >
                {navSpecs[2].name}
              </motion.a>
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
export default Nav;
