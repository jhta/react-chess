import '../styles/Square.styl';
import React, { Component } from 'react';
import classnames from 'classnames';

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

  get style () {
    return classnames(
      'Square',
      {
        'is-black': this.props.color === 'black',
        'is-avalible': this.props.avalible,
      }
    );
  }

  get hasSameColor() {
    const { piece, turn } = this.props;
    return piece.color === turn;
  }

  get canMove() {
    const { piece, avalible } = this.props;
    return (!piece && avalible)
      ||
      (piece && !this.hasSameColor);
  }

  handleClick = (event) => {
    event.preventDefault();
    // Actions
    const { calculate, cancel, move } = this.props;
    const { column, row, isMoving, piece } = this.props;
    if (!isMoving) {
      if (this.hasSameColor) calculate(row, column, piece);
      return;
    }
    if (this.canMove) move(row, column);
    cancel();
    return;
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
