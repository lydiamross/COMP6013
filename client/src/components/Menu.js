import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Menu = () => {
  return (
    <nav>
      <FontAwesomeIcon icon={faBars} />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </nav>
  );
};
