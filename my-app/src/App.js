import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Game from './game';

class App extends React.Component {
  render() {
    return (
      <div className="Game">
        <Game />
      </div>
    );
  }
}

export default App;
