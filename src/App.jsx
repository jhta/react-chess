import './App.styl';
import React, { Component } from 'react';
import Table from './components/Table.jsx';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Table {...this.props} />
      </div>
    );
  }
}

export default App;
