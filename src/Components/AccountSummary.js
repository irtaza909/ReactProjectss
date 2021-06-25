import React, { useContext } from 'react'
import {GloabalContext, GlobalContext} from '../context/GlobalContext'

export const AccountSummary = () => {
const {transactions} = useContext(GloabalContext)
const transactionamount = transactions.map (transaction => transaction.transaction_amount);

const income =transactionamount.filter(transaction=>transaction>0).reduce((acc,item)=>(acc+=item) ,0).toFixed(2)
const expense =transactionamount.filter(transaction=>transaction<0).reduce((acc,item)=>(acc+=item),0).toFixed(2)

    return (
        <div className="inc-exp-container">
        <div>
            <h1>Income</h1>
            <p id ="money-plus" className="money plus">+$0.0</p>
        </div>
        <div>
            <h1>Expense</h1>
            <p id ="money-minus" className="money minus">-$0.0</p>
        </div>
            
        </div>
    )
}


