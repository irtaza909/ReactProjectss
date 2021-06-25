import React, { useContext } from 'react'

import {GloabalContext} from '../context/GlobalContext'

export const Transaction = ({transaction}) => {
    const sign = transaction.transaction_amount > 0 ? '+' : "-";
    const transactiontype =  transaction.transaction_amount > 0 ? "plus" : "minus" ;

    const {delTranscation} = useContext(GloabalContext)

    return (
        <>
        <li className={transactiontype}>
        {transaction.discription}
        <span>{sign}${Math.abs(transaction.transaction_amount)}</span>
        <button className="delete-btn" onClick={()=>delTranscation(transaction.id)}>X</button>

        </li>
            
        </>
    )
}

