import React from 'react'
import Sidebar from './SideBar'
import Contentpage from './Contentpage'

const WelcomeBack = () => {
  return (
   <div className="flex sm:flex-row flex-col min-h-screen space-y-3 sm:space-y-0">
      <Sidebar />
      <Contentpage />
    </div>
  )
}

export default WelcomeBack
