import React, { useState } from 'react';

const ArrayOfObjectDestructuring = () => {
  //   const [users, setUsers] = useState([
  //     { name: 'Upendra', age: 25 },
  //     { name: 'Kiran', age: 30 },
  //   ]);

  //   const handleOnClick = () => {
  //     setUsers((preUsers) => {
  //       return [preUsers[0], { ...preUsers[1], age: 35 }];
  //     });
  //   };

  const [users, setUsers] = useState([
    { id: 1, name: 'Upendra', age: 25 },
    { id: 2, name: 'Kiran', age: 30 },
    { id: 3, name: 'Anjali', age: 22 },
  ]);

  const handleOnClick = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === 2 ? { ...user, age: user.age + 1 } : user
      )
    );
  };

  return (
    <div>
      <h1>{users[1].age}</h1>
      <button onClick={handleOnClick}>Click</button>
    </div>
  );
};

export default ArrayOfObjectDestructuring;
