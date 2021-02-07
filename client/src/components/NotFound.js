import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div>
    <h2>Not Found</h2>
    <p>Please return <Link to="/">Home</Link></p>
  </div>
);