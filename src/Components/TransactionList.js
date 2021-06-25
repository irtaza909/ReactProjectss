import React, { useContext } from 'react'
import {GloabalContext} from "../context/GlobalContext";
import {Transaction} from './Transaction'

export const TransactionList = () => {
    const {transactions} = useContext(GloabalContext)
    
    return (
        <>
        <h3>History</h3>
        <ul id ="list" className="list">
            <li className="minus">
               {transactions.map(transaction =>(
                   <Transaction key={transaction.id} transaction= {transaction}/>
                   
               ))

               }
            </li>
        </ul>
            
        </>
    )
}


