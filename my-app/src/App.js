import React from 'react';
import './App.css';
import Game from './game';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div><Header />
        <div className="Game">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
