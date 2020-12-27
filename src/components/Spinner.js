import React from 'react';
import spinner from '../img/Spinner-1s-200px.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '100px', margin: '100px auto', display: 'block' }}
        alt='loading'
      />
    </div>
  );
};

export default Spinner;
