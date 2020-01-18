import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from '../components/header';
import Content from '../components/content';
import Ticket from '../components/ticket';
import NoPageFound from '../components/noPageFound';
import './style.css';

const history = createBrowserHistory();   

const App = () => {
    return(
      <Router history={history}>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
          <Switch>
              <Route exact path="/" component={Content} />
              <Route path="/ticket/:pin/:ride_id" component={Ticket} />
              <Route exact path='*' component={NoPageFound} />
          </Switch>
          </Row>
        </Container>
      </Router>
    )
}

export default App;