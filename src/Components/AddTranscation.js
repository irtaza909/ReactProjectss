import React ,{useContext, useState} from 'react'

import {GloabalContext} from '../context/GlobalContext'

 export const AddTranscation = () => {
     const[discription,setDiscription] =  useState("")
     const[transcationamount, setTranscationAmount]= useState("")

     const {addTranscation} = useContext(GloabalContext);

     const onSubmit = (e) =>{
            e.preventDefault();


            const newTransaction= {
              id: new Date().getTime,
              discription,
              transcationamount: +transcationamount

            }

            addTranscation(newTransaction);
            
     }


    return (
        <div>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <input type="text" placeholder="enter the details" 
                value={discription} 
                name = "discription" 
                id = "discription"
                onChange={(e)=>setDiscription(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="Transacionamount">Transaction amount</label>
                <input type="text" placeholder="enter the amount" 
                value={transcationamount} 
                name = "transcationamount"
                id = "transcationamount" 
                onChange = {(e)=>setTranscationAmount(e.target.value)}
                />
                <button className="btn" >Add Transaction</button>
            </div>
        </form>
            
        </div>
    )
}


