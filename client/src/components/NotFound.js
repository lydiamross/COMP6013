import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div>
    <h3>Not Found</h3>
    <p>Please return <Link to="/">Home</Link></p>
  </div>
);