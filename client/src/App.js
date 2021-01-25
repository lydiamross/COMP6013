import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.png';
import { Cards } from './components/Cards.js';
import { Topics } from './components/Topics.js';
import { Home } from './components/Home';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Menu } from './components/Menu';
import { Logo } from './components/styled/styled';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <Link to="/"><Logo src={logo} alt="Logo"/></Link>
          <h1>Learnr</h1>
          <Menu />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cards" exact component={Cards} />
          <Route path="/topics" exact component={Topics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
