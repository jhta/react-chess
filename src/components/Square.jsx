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

  get hasSameColor() {
    const { piece, turn } = this.props;
    if (!piece) return false;
    return piece.color === turn;
  }

  @autobind
  handleClick(event) {
    event.preventDefault();
    // Actions
    const { calculate, cancel, move } = this.props;
    const { column, row, isMoving, piece, avalible } = this.props;
    if (!isMoving) {
      if (this.hasSameColor) calculate(row, column, piece);
    } else {
      if ((!piece && avalible) || !this.hasSameColor) move(row, column);
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
