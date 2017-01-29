import './App.styl';
import React, { Component } from 'react';
import Table from './components/Table.jsx';
import { connect } from 'react-redux';
import {
  cancelMovement,
  calculateMovements
} from './actions';

const mapStateToProps = (state) => {
  return {
    table: state.get('table').toJS(),
    isMoving: state.get('isMoving'),
    turn: state.get('turn'),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancel: () => {
      dispatch(cancelMovement())
    },
    calculate: (row, column, piece) => {
      dispatch(calculateMovements(row, column, piece))
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table {...this.props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
