import React, { useState } from 'react';

const UserList = () => {
  let users = [
    { id: 1, name: 'upendra' },
    { id: 2, name: 'Naveen' },
    { id: 3, name: 'Lava' },
    { id: 4, name: 'Saran' },
    { id: 5, name: 'Ramu' },
    { id: 6, name: 'Charan' },
  ];

  const [state, updateState] = useState(false);

  return (
    <div className="m-5 bg-pink-200 p-2 shadow-2xl rounded-md">
      <button
        onClick={() => updateState(!state)}
        className="border p-1 bg-blue-500 text-white rounded-md mb-2 mt-3"
      >
        {state ? 'Hide List' : 'Show List'}
      </button>

      <div>
        <div className="flex items-center justify-center p-1">
          {state && (
            <ul>
              {users.map((user) => (
                <ol key={user.id}>
                  {user.id}.&nbsp;{user.name}
                </ol>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
