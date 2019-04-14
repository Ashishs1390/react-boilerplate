import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Home from './components/home.js';
import About from './components/about.js';
import Topics from './components/topics.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Router>
      </Provider>
    );
  }
}

export default App;
