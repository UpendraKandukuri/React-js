import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_AGE':
      return { ...state, age: state.age + 1 };
    case 'DECREMENT_AGE':
      return { ...state, age: state.age - 1 };
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const Usereducerrr = () => {
  const user = {
    name: 'Upendra',
    age: 22,
  };
  const [user1, dispatch] = useReducer(reducer, user);
  return (
    <div>
      <h1>Name: {user1.name}</h1>
      <h1>Age: {user1.age}</h1>
      <button
        onClick={() => dispatch({ type: 'INCREMENT_AGE' })}
        className="border m-2 p-1"
      >
        Increment Age
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT_AGE' })}
        className="border m-2 p-1"
      >
        Decrement Age
      </button>
      <button
        onClick={() => dispatch({ type: 'CHANGE_NAME', payload: 'Kiran' })}
        className="border m-2 p-1"
      >
        Change Name
      </button>
    </div>
  );
};

export default Usereducerrr;
