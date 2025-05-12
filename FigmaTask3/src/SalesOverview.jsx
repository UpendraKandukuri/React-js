import React from 'react'
import SideBar from './SideBar'
import ContentPage from './ContentPage'

const SalesOverview = () => {
  return (
    <div className="flex sm:flex-row flex-col min-h-screen space-y-3 sm:space-y-0">
        <SideBar />
       <ContentPage />
    </div>
  )
}

export default SalesOverview
