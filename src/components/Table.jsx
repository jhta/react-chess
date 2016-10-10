import React, { Component } from 'react';
import Square from './Square.jsx';
import '../styles/Table.styl';

class Table extends Component {
  /**
   * Create and Fill the basic first table getting the assigned color
   * @return {Array} 8x8 Matrix with default table colors.
   */
  getTableMatrix() {
    const table = new Array(7);
    let i, j;

    for (i = 0; i < 8; i++) {
      table[i] = new Array(7);

        for (j = 0; j < 8; j++) {
          // if the sum of indexes is 2 multiple the square is white
          table[i][j] = ((i + j) % 2 === 0);
        }
    }
    return table;
  }

  /**
   * Default Render for Table, print all square
   * @return {Component}
   */
  render() {
    const table = this.getTableMatrix();
    return (
      <div className="Table">
        {
          table.map( row => row
                .map(col =>
                  <Square
                    isWhite={col}
                    />
                )
              )
        }
      </div>
    );
  }
}


export default Table;
