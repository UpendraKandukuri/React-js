import React from 'react'
import Sidebar from './Sidebar'
import ContentPage from './ContentPage'


const AnalyticsDashBoard = () => {
  return (
    <div className="flex sm:flex-row flex-col min-h-screen space-y-3 sm:space-y-0">
      <Sidebar />
      <ContentPage />
    </div>
  )
}

export default AnalyticsDashBoard
