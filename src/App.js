import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import test from './Component/test';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/emailsender" exact component={test} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
