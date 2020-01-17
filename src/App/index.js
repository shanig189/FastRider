import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../components/header';
import Content from '../components/content';
import './style.css';
 
const App = () => {
    return(
      // <Router>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <Content />
          </Row>
        </Container>
      // </Router>
    )
}

export default App;