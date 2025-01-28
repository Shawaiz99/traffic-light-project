import React, { useState } from 'react';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red'); // Track active light state

  const changeLight = (color) => {
    setActiveLight(color); // Set the clicked light as active
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => changeLight('red')}
      />
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => changeLight('yellow')}
      />
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => changeLight('green')}
      />
    </div>
  );
};

export default TrafficLight;
