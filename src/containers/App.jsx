import '../App.styl';
import React  from 'react';
import Table from '../components/Table.jsx';
import { connect } from 'react-redux';
import {
  cancelMovement,
  calculateMovements,
  move
} from '../actions';

const mapStateToProps = (state) => ({
  table: state.get('table').toJS(),
  isMoving: state.get('isMoving'),
  turn: state.get('turn'),
  pieceInMove: state.get('pieceInMove').name,
  pieceInMoveX: state.get('pieceInMoveX') + 1,
  pieceInMoveY: state.get('pieceInMoveY') + 1,
});

const mapDispatchToProps = (dispatch) => ({
  cancel() {
    dispatch(cancelMovement())
  },
  calculate(positionX, positionY, piece) {
    dispatch(calculateMovements({positionX, positionY, piece}))
  },
  move(positionX, positionY) {
    dispatch(move({positionX, positionY}))
  }
});

const App = (props) => {
    return (
      <div className="App">
        <Table {...props} />
        <p> turn: {props.turn} </p>
        <p> {props.isMoving ? "is moving" : "no moving"} </p>
        <p> piece: {props.pieceInMove ? props.pieceInMove : "none"}</p>
        <p> position: {props.pieceInMoveX + " " + props.pieceInMoveY}</p>
      </div>
    );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
