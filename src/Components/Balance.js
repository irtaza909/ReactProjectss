import React, { useContext } from 'react'
import {GloabalContext, GlobalContext} from '../context/GlobalContext'

export const Balance = () => {
    const {transactions} = useContext(GloabalContext)

    const transactionamounts = transactions.map(transaction => transaction.transaction_amount)
    const balance = transactionamounts.reduce((acc,item)=>(acc += item),0).toFixed(2)

    return (
        <div>
            <h1>Current Balance</h1>
            <h1 id ='balance'>${balance}</h1>
        </div>
    )
}

