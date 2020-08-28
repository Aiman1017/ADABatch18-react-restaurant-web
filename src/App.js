import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Detail from './components/Detail';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route path='/'>
            <Main/>
          </Route>

          <Route path='/detail/:_id'>
            <Detail/>
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
