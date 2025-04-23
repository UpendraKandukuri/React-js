import React, { useState } from 'react'

const Counter = () => {
   const[number,updateNumber] = useState(0);

  return (
    <div className='bg-white space-y-4 space-x-3 p-4 rounded-md shadow-2xl'>
      <h1 className='text-red-400 font-bold'>useState Hook Example</h1>
      <h1 className='flex justify-center items-center'>Number :  <span className='text-orange-600'> &nbsp;{ number}</span></h1>

      <button onClick={()=>{
        updateNumber(number+1);
      }} className='text-white rounded bg-blue-400 p-1 cursor-pointer'>Increment</button>

      <button onClick={()=>{
        updateNumber(number-1);
      }} className='text-white rounded bg-blue-400 p-1 cursor-pointer'>Decrement</button>
    </div>
  )
}

export default Counter
