import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, addTask] = useState('');

  const handleChange = (e) => {
    addTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim() === '') return;
    setTasks((prevTasks) => [...prevTasks, task]);
    addTask('');
  };

  const handleDelete = (i) => {
    const remainingTasks = tasks.filter((_, index) => index !== i);
    setTasks(remainingTasks);
  };

  const handleEdit = (taskToEdit, index) => {
    const updatedTask = prompt('Update Task', taskToEdit);
    if (updatedTask !== null && updatedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="bg-white p-3 rounded-md shadow-md font-serif space-y-2">
      <h1 className="flex justify-center ">To-Do List</h1>
      <div className="flex justify-center">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="border border-gray-200 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 p-1"
          placeholder="Enter Task"
        />
        &nbsp;
        <button
          className="border p-1 rounded-md border-green-800 bg-green-600 hover:bg-green-900 text-white"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((t, index) => (
          <div className="m-1 bg-cyan-50 hover:bg-cyan-100">
            <div key={index} className="grid grid-cols-3 items-center border">
              <h1 className="p-2 mr-1">{t}</h1>
              <button
                onClick={() => handleDelete(index)}
                className="border border-gray-50 rounded-2xl mr-1 bg-red-400 hover:bg-red-500"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(t, index)}
                className="border border-gray-50 rounded-2xl bg-blue-400 hover:bg-blue-500"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
