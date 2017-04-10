import React, { Component } from 'react';
import Clock from './clock';
import Tiles from './tiles';

class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDate: new Date(2017, 4, 23)
    }
  }

  render() {
    return (
      <div style={{ height: '100vh', backgroundColor: 'black' }} >
        <Tiles giphys={this.props.giphys} />
        <Clock toDate={this.state.toDate} />
      </div>
    );
  }
}

export default CountDown;