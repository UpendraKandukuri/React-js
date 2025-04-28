import React from 'react';

const Child1 = ({ getData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    getData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Child1;
