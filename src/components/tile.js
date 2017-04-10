import React, { Component } from 'react';

const Tile = (props) => {
  const offset = props.giphyHeight < props.height ? (props.height - props.giphyHeight) % 2 : 0;

  var styles = {
    height: props.height,
    width: props.width ? props.width : '100%',
    margin: 'auto',
    overflow: 'hidden',
    position: 'relative'
  }

  return (
    <div className="col-sm-4 tile-padding">
      <div style={styles} className="tile">
        <div className='inner' >
          <img style={{ width: '100%', verticleAlign: 'middle' }} src={props.url} />
        </div>
      </div>
    </div>
  );
};

export default Tile;