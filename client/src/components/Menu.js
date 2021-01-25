import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </nav>
  );
};
