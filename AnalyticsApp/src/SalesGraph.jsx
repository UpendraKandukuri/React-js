import React from 'react'

import SalesReportChart from './SalesReportChart'
import CustomerOverviewChart from './CustomerOverviewChart'

const SalesGraph = () => {
  return (
    <div className='flex flex-col space-y-3 w-full'>
      <div className="flex flex-col sm:flex-row justify-evenly w-full">
            <div className="m-4 space-y-1 border border-gray-300 rounded-3xl p-3">
              <div>
                <h1 className="font-plus font-bold">Total View 24hr</h1>
              </div>
              <div className="flex sm:gap-7 justify-between">
                <h1 className="font-plus font-bold text-2xl">1468</h1>
                <div className="border border-gray-50 rounded-3xl bg-green-100 px-3 flex items-center">
                  <h1 className="font-plus text-green-800 font-medium">168%</h1>
                </div>
              </div>
            </div>
            <div className="m-4 space-y-1 border border-gray-300 rounded-3xl p-3">
              <div>
                <h1 className="font-plus font-bold">Total Orders</h1>
              </div>
              <div className="flex sm:gap-7 justify-between">
                <h1 className="font-plus font-bold text-2xl">19</h1>
                <div className="border border-gray-50 rounded-3xl bg-green-100 px-3 flex items-center">
                  <h1 className="font-plus text-green-800 font-medium">22.1%</h1>
                </div>
              </div>
            </div>
            <div className="m-4 space-y-1 border border-gray-300 rounded-3xl p-3 ">
              <div>
                <h1 className="font-plus font-bold">Avg Revenue</h1>
              </div>
              <div className="flex sm:gap-7 justify-between">
                <h1 className="font-plus font-bold text-2xl">$872</h1>
                <div className="border border-gray-50 rounded-3xl bg-red-100 px-3 flex items-center">
                  <h1 className="font-plus text-red-800 font-medium">19%</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-gray-300 rounded-3xl p-3 flex flex-col gap-2'>
            <div>
                <h1 className='font-plus font-bold text-2xl'>Saels Report</h1>
            </div>
             <div>
                <SalesReportChart />
             </div>
          </div>
          <div className='border border-gray-300 rounded-3xl p-3 flex flex-col gap-2'>
            <div>
                <h1 className='font-plus font-bold text-2xl'>Customer Overview</h1>
            </div>
             <div>
                <CustomerOverviewChart />
             </div>
          </div>
    </div>
  )
}

export default SalesGraph
