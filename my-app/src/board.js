import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(properties) {
  return (
    <button className="square" onClick={properties.onClick}>
      {properties.value}
    </button>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
