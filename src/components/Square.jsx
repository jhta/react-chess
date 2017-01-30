import '../styles/Square.styl';
import React, { Component } from 'react';
import classnames from 'classnames';
import { autobind } from 'core-decorators';

/**
* Square Component
*/
class Square extends Component {

  get iconPiece() {
    const { piece } = this.props;
    return  piece ?
      (
        piece.htmlCode ?
          piece.htmlCode
          :
          null
      ) : null;
  }

  get style() {
    return classnames(
      'Square',
      {
        'is-black': this.props.color === 'black',
        'is-avalible': this.props.avalible,
      }
    );
  }

  @autobind
  handleClick(event) {
    event.preventDefault();
    const { calculate, cancel, column, row, isMoving, turn, piece, avalible, move } = this.props;
    if (!isMoving) {
      if (piece && piece.color === turn) calculate(row, column, piece);
    } else {
      if ((!piece && avalible) || (piece && piece.color !== turn)) move(row, column);
      else cancel();
    }
  }

  render() {
    const { iconPiece } = this;
    return (
      <div className={this.style} onClick={this.handleClick}>
        <p dangerouslySetInnerHTML={{__html: iconPiece }}/>
      </div>
    );
}
}


export default Square;
