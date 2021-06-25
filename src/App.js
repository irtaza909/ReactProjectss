import React from 'react'
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {AccountSummary} from './Components/AccountSummary'
import {TransactionList} from './Components/TransactionList'
import {AddTranscation} from './Components/AddTranscation'
import{GlobalProvider} from './context/GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <AccountSummary/>
      <TransactionList/>
      <AddTranscation/>
    </div>
    
      
    </GlobalProvider>
  )
}

export default App;



















