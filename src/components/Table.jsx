import '../styles/Table.styl';
import React, { Component } from 'react';
import Square from './Square.jsx';
import defaultTable  from '../utils/getDefaultTable';

class Table extends Component {

  /**
   * Default Render for Table, print all square
   * @return {Component}
   */
  render() {
    return (
      <div className="Table">
        {
          defaultTable.map( (row, i) => row
            .map((square, j) =>
              <Square
                {...square}
                column={j + 1}
                row={i + 1}
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
