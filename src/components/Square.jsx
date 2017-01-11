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
    const { dispatch, column, row, piece } = this.props;
    if (piece) {
      dispatch({
        type: 'CALCULATE_MOVEMENTS',
        payload: {
          positionX: row,
          positionY: column,
          piece: piece
        }
      });
    } else {
      dispatch({
        type: 'CANCEL_MOVEMENT',
      })
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
