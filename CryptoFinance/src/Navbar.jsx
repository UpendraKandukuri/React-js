import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-3 '>
      <h1 className='font-plus font-bold text-xl'>My Wallets</h1>
      <input type='text' placeholder='search here..' className='px-3 py-1 border border-gray-300' />
    </div>
  )
}

export default Navbar
