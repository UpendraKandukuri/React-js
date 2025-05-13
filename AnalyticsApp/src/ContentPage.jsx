import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const ContentPage = () => {
  return (
    <div  className="border border-gray-300 w-full px-2 sm:px-4 space-y-5 min-h-screen">
        <Outlet />
    </div>
  )
}

export default ContentPage
