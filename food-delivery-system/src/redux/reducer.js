import {ADD_TO_CART,ADD_RESTAURANTS} from './actionTypes'

const reducer=(state, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {...state}
        case ADD_RESTAURANTS:
            return {...state}
        default: 
            return state
    }
}

export default reducer;