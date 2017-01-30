import './App.styl';
import React, { Component } from 'react';
import Table from './components/Table.jsx';
import { connect } from 'react-redux';
import {
  cancelMovement,
  calculateMovements,
  move
} from './actions';

const mapStateToProps = (state) => {
  return {
    table: state.get('table').toJS(),
    isMoving: state.get('isMoving'),
    turn: state.get('turn'),
    pieceInMove: state.get('pieceInMove').name,
    pieceInMoveX: state.get('pieceInMoveX') + 1,
    pieceInMoveY: state.get('pieceInMoveY') + 1,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancel: () => {
      dispatch(cancelMovement())
    },
    calculate: (row, column, piece) => {
      dispatch(calculateMovements(row, column, piece))
    },
    move: (row, column) => {
      dispatch(move(row, column))
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table {...this.props} />
        <p> turn: {this.props.turn} </p>
        <p> {this.props.isMoving ? "is moving" : "no moving"} </p>
        <p> piece: {this.props.pieceInMove ? this.props.pieceInMove : "none"}</p>
        <p> position: {this.props.pieceInMoveX + " " + this.props.pieceInMoveY}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
