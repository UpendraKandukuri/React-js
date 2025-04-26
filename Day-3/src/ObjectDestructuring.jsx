import React, { use, useState } from 'react';

const ObjectDestructuring = () => {
  //   const user = {
  //     name: 'Upendra',
  //     skills: {
  //       frontend: 'React',
  //       backend: 'Spring Boot',
  //     },
  //   };
  //   const {
  //     name,
  //     skills: { frontend, backend },
  //   } = user;

  //   const { name, skills } = user;
  //  const {frontend, backend}

  const [userDetails, setUserDetails] = useState({
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  });

  const [inputValue, setInputValue] = useState('');

  const { name, age, address } = userDetails;
  //   const { city, country } = address;

  const handleOnClick = () => {
    setUserDetails((preUser) => {
      return { ...preUser, address: { ...address, city: inputValue } };
    });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{address.city}</h1>
      <h1>{address.country}</h1>
      <button onClick={handleOnClick}>Click</button>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border"
      />
    </div>
  );
};

export default ObjectDestructuring;
