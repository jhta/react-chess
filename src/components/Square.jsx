import '../styles/Square.styl';
import React, { Component } from 'react';
import classnames from 'classnames';
import getPiece from '../utils/getPiece';
import { injectProps } from 'relpers';


/**
* Square Component
*/
class Square extends Component {


  @injectProps
  render({row, column, color, index, piece}) {
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
}


export default Square;
