import {ADD_TO_CART,ADD_RESTAURANTS} from './actionTypes'
import data from '../utils/data.json'

const initState={
    restData:[...data.search],
    cartItems:[],
    search:'',
    filterData:[],
    loading:false
}
const reducer=(state=initState, action)=>{
    console.log(initState)

    switch(action.type){
        case ADD_TO_CART:
            return {...state,cartItems:[ {"oe":1}]}
        case ADD_RESTAURANTS:
            return {...state}
        default: 
            return state
    }
}

export default reducer;