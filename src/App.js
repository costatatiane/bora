import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Section from './components/section/Section.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;