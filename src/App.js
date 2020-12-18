//react import
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

//custom import
import { write, read, autoEmpty } from './localstorage/localStorage.handler';

//bootstrap components
import Container from 'react-bootstrap/Container';

//custom component
import NavbarComponent from './components/navbar.component';
import NewsPage from './components/newsPage/newsPage.component';

//style
import './App.css';

const App = () => {

  //init localstorage
  autoEmpty();
  if (!read('country')) { write('country', 'it') }

  return (
      <Router>
        <NavbarComponent/>
        <Container fluid>
          <Route path="/news/:country/:category" exact component={NewsPage}/>
        </Container>
      </Router>
  );
};

export default App;


