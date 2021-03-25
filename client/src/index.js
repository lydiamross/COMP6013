import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.png';
import { Cards } from './components/Cards.js';
import { Topics } from './components/Topics.js';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Menu } from './components/Menu';
import { AppContainer, Logo, Header, Main } from './styled';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <Router>
        <Header>
          <Link to="/"><Logo src={logo} alt="Logo" /></Link>
        </Header>
        <Menu />
        <Main>
          <Switch>
            <Route path="/" exact component={Topics} />
            <Route path="/about" exact component={About} />
            <Route path="/cards" exact component={Cards} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </Router>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
