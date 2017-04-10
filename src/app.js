import React, { Component } from 'react';
import CountDown from './components/countDown.js';
import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      giphys: null
    };
  }

  componentDidMount() {
    this.getGiphys();
  }

  getGiphys() {
    return axios.get('http://api.giphy.com/v1/gifs/search?q=the+end&api_key=dc6zaTOxFJmzC')
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
      <CountDown className='fill' giphys={this.state.giphys} />
    );
  }
}

