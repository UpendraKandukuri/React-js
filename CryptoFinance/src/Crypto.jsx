import React from 'react'
import Sidebar from './Sidebar'
import ContentPage from './ContentPage'

const Crypto = () => {
  return (
    <div className='flex w-full min-h-screen items-stretch'>
      <Sidebar />
      <ContentPage />
    </div>
  )
}

export default Crypto
