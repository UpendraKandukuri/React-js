import React from 'react';

const Child1 = ({ getData }) => {
  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    getData((preUser) => {
      return { ...preUser, [name]: value };
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="border"
      />
      <br></br>
      <input
        type="text"
        name="age"
        onChange={handleChange}
        className="border"
      />
    </div>
  );
};

export default Child1;
