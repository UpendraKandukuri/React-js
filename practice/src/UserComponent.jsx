import React from 'react';

const UserComponent = ({ userDetails }) => {
  const { name, age } = userDetails;
  return (
    <div>
      <h1>Welcome User</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default UserComponent;
