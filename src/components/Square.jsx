import '../styles/Square.styl';
import React from 'react';
import classnames from 'classnames';
import getPiece from '../utils/getPiece';


/**
 * Square in Chess table
 * @param {Bool} isWhite
 */
function Square({row, column, color, index, piece}) {
  const iconPiece = piece ? getPiece(piece) : null;
  const text = (iconPiece && iconPiece.htmlCode) ? iconPiece.htmlCode : '';
  const style = classnames(
    'Square',
    {
      'is-black': color === 'black'
    }
  );
  return (
    <div className={style}>
      <p dangerouslySetInnerHTML={{__html: text }}/>
    </div>
  );
}


export default Square;
