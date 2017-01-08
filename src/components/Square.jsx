import React from 'react';
import classnames from 'classnames';
import '../styles/Square.styl';

/**
 * Square in Chess table
 * @param {Bool} isWhite
 */
function Square({row, column, color, index}) {
  const style = classnames(
    'Square',
    {
      'black': color === 'black'
    }
  );
  return (
    <div className={style}>
      {`${row}*${column}`}
    </div>
  );
}


export default Square;
