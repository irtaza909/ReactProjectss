import { createContext } from "react";
import React ,{useReducer} from "react";
import AppReducer from './AppReducer'

// create initail state 

const initialState = {
    transactions:[]
}

//create global context 
export const GloabalContext =createContext(initialState);

//Create the provider  component to the global context 

export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState)
    //Action for transactions

    function delTranscation(id){
        dispatch({
            type:"delete transcation",
            payload: id
        })
    }


    function addTranscation (transactions) {
        dispatch({
            type:"Add transaction",
            payload:transactions
        })
    }

    return(<GloabalContext.Provider value= {{
        transactions: state.transactions,
        delTranscation,
        addTranscation
    }}>
        {children}
    </GloabalContext.Provider>)

    
}
