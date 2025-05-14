import React from 'react'
import { Outlet } from 'react-router-dom'

const ContentPage = () => {
  return (
    <div className='w-full pr-4'>
      <Outlet />
    </div>
  )
}

export default ContentPage
