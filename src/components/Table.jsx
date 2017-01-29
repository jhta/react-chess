import '../styles/Table.styl';
import React, { Component } from 'react';
import Square from './Square.jsx';


class Table extends Component {

  /**
   * Default Render for Table, print all square
   * @return {Component}
   */
  render() {
    const { table, calculate, cancel } = this.props;
    return (
      <div className="Table">
        {
          table.map( (row, i) => row
            .map((square, j) =>
              <Square
                {...square}
                calculate={calculate}
                cancel={cancel}
                column={j}
                row={i}
                key={`${i}${j}`}
              />
            )
          )
        }
      </div>
    );
  }
}


export default Table;
