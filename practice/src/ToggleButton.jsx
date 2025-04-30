import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    // if (isOn === false) {
    //   setIsOn(true);
    // } else {
    //   setIsOn(false);
    // }

    setIsOn(!isOn);
  };
  return (
    <div>
      {/* {isOn === false && <button onClick={handleClick}>OFF</button>}
      {isOn === true && <button onClick={handleClick}>ON</button>} */}

      <button onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default ToggleButton;
