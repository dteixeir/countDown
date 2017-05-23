import React, { Component } from 'react';
import CountDown from './components/countDown.js';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      giphys: null,
      toDate: new Date(2017, 4, 23, 17, 0, 0, 0),
      giphyUrl: null
    };

    this.checkForEnd = this.checkForEnd.bind(this);
  }

  componentDidMount() {


    this.checkForEnd();
    this.getGiphys();
    setInterval(this.checkForEnd, 1000);
  }

  checkForEnd() {
    let data = moment(Date.Now).countdown(this.state.toDate);
    let giphyUrl = data.value > 0 ? 'http://api.giphy.com/v1/gifs/search?q=the+end&api_key=dc6zaTOxFJmzC' : 'http://api.giphy.com/v1/gifs/search?q=run+away&api_key=dc6zaTOxFJmzC';
    if (this.state.giphyUrl !== giphyUrl) {
      this.setState({ giphyUrl });
    }
  }

  componentDidUpdate() {
    this.getGiphys();
  }

  getGiphys() {
    if (!this.state.giphyUrl) {
      return;
    }

    return axios.get(this.state.giphyUrl)
      .then(({ data }) => {
        const nineGiphys = [];
        for (var i = 0; i < 9; i++) {
          var giphy = {
            index: i,
            url: data.data[ i ].images.fixed_height.url,
            giphyHeight: data.data[ i ].images.fixed_height.height
          }

          nineGiphys.push(giphy);
        }

        this.setState({ giphys: nineGiphys });
      });
  }

  render() {
    return (
      <CountDown className='fill' toDate={this.state.toDate} giphys={this.state.giphys} />
    );
  }
}

