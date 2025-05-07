import React from 'react';

const UserProfile = ({ name, email, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
