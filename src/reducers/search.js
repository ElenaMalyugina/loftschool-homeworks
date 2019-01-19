import { searchRequest, searchSuccess } from "../actions";

let SearchReducer=(state={previews: []}, action)=>{
    
    switch (action.type) {
        case searchRequest.toString():
            return {
                ...state, 
                previews: [],
                isLoading: true
            }
        case searchSuccess.toString():            
            return{
                ...state,
                previews: action.payload,
                isLoading: false
            }    

        default:
            return state;
    }
}

export default SearchReducer;