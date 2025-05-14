import React from 'react'
import Sidebar from './Sidebar'
import ContentPage from './ContentPage'

const Softui = () => {
  return (
    <div className='flex gap-10 bg-gray-50 min-h-screen'>
        <Sidebar />
        <ContentPage />
      
    </div>
  )
}

export default Softui
