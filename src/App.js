import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <BrowserRouter basename ={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
