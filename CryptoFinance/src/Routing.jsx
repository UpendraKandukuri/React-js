import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Crypto from './Crypto'
import CardDetails from './CardDetails'
import AddCardForm from './AddCardForm'
import WalletHistory from './WalletHistory'
import Transactions from './Transactions'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Crypto />} >
        <Route path='cardlist' element={<CardDetails />} />
        <Route path='history' element={<WalletHistory />} />
        <Route path='addwallet' element={<AddCardForm />} />
        <Route path='transaction' element={<Transactions />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routing
