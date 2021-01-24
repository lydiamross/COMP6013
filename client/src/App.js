import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Cards from './Cards.js';

function Home() {
  return (
    <div>
      <h2>Learnr</h2>
      <p>Check out our <Link to="/about">About</Link> page</p>
    </div>
  );
};

function About() {
  return (
    <div>
      <h2>About page</h2>
      <p>Lorem ipsum <Link to="/">dolor sit</Link> amet</p>
    </div>
  );
};

function NotFound() {
  return (<i>Not Found</i>);
};

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Learnr</h1>
          <Link to="/"><img src={logo} alt="Logo" width="50px"/></Link>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cards" exact component={Cards} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
