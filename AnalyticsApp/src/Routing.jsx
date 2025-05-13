import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnalyticsApp from './AnalyticsApp'
import DashBorad from './DashBorad'
import ContentPage from './ContentPage'
import VendorActivity from './VendorActivity'
import SalesOverview from './SalesOverview'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AnalyticsApp />}>
        
          <Route path="home" element={<DashBorad />} />
          <Route path='vendoractivity' element={<VendorActivity/>} />
          <Route path='salesgraph' element={<SalesOverview />} />
      
        </Route>
      </Routes>
   
    </div>
  )
}

export default Routing
