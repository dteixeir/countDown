import React, { Component } from 'react';

const ClockTile = (props) => {
  var style = {
    fontSize: 100,
    opacity: 1,
    textAlign: 'center',
    color: 'white'
  };

  return (
    <div className='col-md-2'>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={style}>{props.value}</div>
        <div style={{ color: 'white', textAlign: 'center' }}>{props.footer}</div>
      </div>
    </div>
  );
};

export default ClockTile;