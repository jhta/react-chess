import '../styles/Table.styl';
import React, { Component } from 'react';
import Square from './Square.jsx';
import getPiece from '../utils/getPiece';


class Table extends Component {

  /**
   * Default Render for Table, print all square
   * @return {Component}
   */
  render() {
    const { table } = this.props;
    return (
      <div className="Table">
        {
          table.map( (row, i) => row
            .map((square, j) =>
              <Square
                {...square}
                dispatch={this.props.dispatch}
                piece={getPiece(square.piece)}
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
