import React, { useState } from 'react';

const ArrayOfObjects = () => {
  const [user, setUser] = useState({ id: '', name: '' });
  const [users, setUsers] = useState([]); // array to hold user objects

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = () => {
    if (user.id && user.name) {
      setUsers([...users, user]);
      setUser({ id: '', name: '' }); // clear input fields
    }
  };

  return (
    <div>
      <input
        type="number"
        name="id"
        value={user.id}
        onChange={handleChange}
        placeholder="Enter ID"
      />
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter Name"
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((u, index) => (
          <li key={index}>
            ID: {u.id}, Name: {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayOfObjects;
