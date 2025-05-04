import React, { useReducer } from 'react';

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'add-todo':
      return [...state, payload];
    case 'remove-todo':
      return state.filter((todo) => {
        return todo.id != payload.id;
      });
    case 'toggle':
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return state;
  }
}

const Usereducerrr2 = () => {
  const todo = [
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Master useReducer', done: false },
  ];

  const [state, dispatch] = useReducer(reducer, todo);
  return (
    <div className="m-2">
      {state.map((todo) => {
        return (
          <div key={todo.id} className="flex space-x-2">
            <h1>{todo.id}</h1>
            <h1>{todo.text}</h1>
            <h1>{todo.done ? 'true' : 'false'}</h1>
          </div>
        );
      })}

      <button
        onClick={() =>
          dispatch({
            type: 'add-todo',
            payload: { id: 3, text: 'Master useMemo', done: false },
          })
        }
        className="border p-1"
      >
        Add-TODO
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'remove-todo',
            payload: { id: 3 },
          })
        }
        className="border p-1"
      >
        REMOVE_TODO
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'toggle',
            payload: { id: 2 },
          })
        }
        className="border p-1"
      >
        TOGGLE_TODO
      </button>
    </div>
  );
};

export default Usereducerrr2;
