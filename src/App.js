import React, { Component } from 'react';

import './App.css';
import Search from './search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Search />
        </header>
      </div>
    );
  }
}

export default App;
