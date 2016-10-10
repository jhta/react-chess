import React from 'react';
import classnames from 'classnames';
import '../styles/Square.styl';

/**
 * Square in Chess table
 * @param {Bool} isWhite
 */
function Square({isWhite, index}) {
  const style = classnames(
    'Square',
    {
      'black': !isWhite,
    }
  );
  return (
    <div className={style}>
      {isWhite ? "w" : "b"}
    </div>
  );
}


export default Square;
