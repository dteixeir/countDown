import React, { Component } from 'react';
import Tile from './tile';

const Tiles = (props) => {
  if (!props.giphys) {
    return (
      <div style={{ backgroundColor: 'black' }}>
        Loading...
        </div>
    );
  }

  const tile = props.giphys.map((giphy) => {
    return (
      <Tile key={giphy.index} url={giphy.url} height={200} giphyHeight={giphy.giphyHeight} />
    );
  });

  return (
    <div style={{ backgroundColor: 'black' }} className="fill container">
      <ul>
        {tile}
      </ul>
    </div>
  );
}

export default Tiles;