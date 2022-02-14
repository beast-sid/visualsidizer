import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      row,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
    } = this.props;
    let extraClassName ='node';
    if(isFinish==true)extraClassName='node-finish';
    else if(isStart==true)extraClassName='node-start';
    else if(isWall==true)extraClassName='node-wall';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    );
  }
}