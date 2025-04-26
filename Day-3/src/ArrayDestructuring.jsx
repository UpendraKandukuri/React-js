import React, { useState } from 'react';

const ArrayDestructuring = () => {
  // const colors = ['red', 'green'];
  // const [primaryColor, secondaryColor, tertiaryColor = 'blue'] = colors;

  //   const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount((precount) => {
  //       return precount + 1;
  //     });
  //   };

  const [userDetails, setUserDetails] = useState(['John', 30, 'Developer']);

  const [inputvalue, setInputValue] = useState('');

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleClick = () => {
  //   setUserDetails((prevDetails) => {
  //     return [prevDetails[0], inputvalue, prevDetails[2]];
  //   });
  // };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setUserDetails((pre) => [...pre, inputvalue]);
  };

  return (
    <div>
      {userDetails.map((e, i) => {
        return <li key={i}>{e}</li>;
      })}
      <input
        type="text"
        name="name"
        value={inputvalue}
        onChange={handleChange}
        className="border"
      />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default ArrayDestructuring;
