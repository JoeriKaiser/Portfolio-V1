import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/about'>ABOUT</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
    </nav>
  );
};
export default Nav;
