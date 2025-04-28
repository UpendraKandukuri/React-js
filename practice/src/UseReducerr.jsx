import React, { useReducer } from 'react';

function countReducer(state, action) {
  if (action.type === 'INC') {
    return (state = state + 1);
  } else if (action.type === 'DEC') {
    return (state = state - 1);
  }
  return 10;
}

const UseReducerr = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DEC' })} className="border">
        -
      </button>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INC' })} className="border">
        +
      </button>
    </div>
  );
};

export default UseReducerr;
