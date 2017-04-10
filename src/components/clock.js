import React, { Component } from 'react';
// eslint-disable-next-line
import countdown from 'moment-countdown';
import moment from 'moment';
import ClockTile from './clockTile';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDate: moment(props.toDate),
      clock: {
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      height: 0
    }

    this.calculateTimeDiff = this.calculateTimeDiff.bind(this);
  }

  calculateTimeDiff() {
    var data = moment().countdown(this.state.toDate);

    this.setState({
      clock: {
        months: data.months,
        weeks: Math.floor(data.days / 7),
        days: data.days % Math.floor(data.days / 7),
        hours: data.hours,
        minutes: data.minutes,
        seconds: data.seconds
      }
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.calculateTimeDiff, 1000);
    var diff = Math.floor((window.innerHeight / 2) - (this.refs.clock.clientHeight / 2));
    this.setState({ height: diff });
  }

  render() {
    var clock = {
      width: '100vw',
      position: 'absolute',
      top: this.state.height
    };

    return (
      <div style={clock} ref='clock'>
        <ClockTile value={this.state.clock.months} footer={'Months'} />
        <ClockTile value={this.state.clock.weeks} footer={'Weeks'} />
        <ClockTile value={this.state.clock.days} footer={'Days'} />
        <ClockTile value={this.state.clock.hours} footer={'Hours'} />
        <ClockTile value={this.state.clock.minutes} footer={'Minutes'} />
        <ClockTile value={this.state.clock.seconds} footer={'Second'} />
      </div>
    );
  }
}

export default Clock;