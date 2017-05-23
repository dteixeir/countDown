import React, { Component } from 'react';
import Clock from './clock';
import Tiles from './tiles';

class CountDown extends Component {
  render() {
    return (
      <div style={{ height: '100vh', backgroundColor: 'black' }} >
        <Tiles giphys={this.props.giphys} />
        <Clock toDate={this.props.toDate} />
      </div>
    );
  }
}

export default CountDown;