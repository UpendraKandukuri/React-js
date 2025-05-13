import React from 'react'

const Lables = ({ color, item, percentage }) => {
  const colorClasses = {
    red: 'border-red-500 bg-red-500',
    blue: 'border-blue-500 bg-blue-500',
    green: 'border-green-500 bg-green-500',
    yellow: 'border-yellow-500 bg-yellow-500',
    pink: 'border-pink-500 bg-pink-500',
  }

  return (
    <div className="flex justify-center gap-2">
      <div className={`w-5 h-5 ${colorClasses[color]} rounded mt-1`}></div>
      <div className='flex flex-col gap-1 font-plus font-bold'>
        <h1 className='text-gray-700'>{item}</h1>
        <h1>{percentage}%</h1>
      </div>
    </div>
  )
}

export default Lables
