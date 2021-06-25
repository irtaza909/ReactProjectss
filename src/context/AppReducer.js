


export default (state,action) =>{
    switch(action.type) {
        case 'delete transcation':
            return{
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction.id != transaction.payload)
            }
        case 'Add transaction':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }    
        default:
            return state;    
    };
}













