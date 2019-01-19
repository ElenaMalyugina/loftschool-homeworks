import { showRequest, showSuccess } from "../actions";

let SearchReducer=(state={}, action)=>{
    
    switch (action.type) {
        case showRequest.toString():
            return {
                ...state, 
                showPage: [],
                isLoading: true
            }
        case showSuccess.toString():            
            return{
                ...state,
                showPage: action.payload,
                isLoading: false
            }    

        default:
            return state;
    }
}

export default SearchReducer;