import {ADD_RESTAURANTS,ADD_TO_CART} from './actionTypes'

export const addRestaurants=(payload)=>{
    type: ADD_RESTAURANTS,
    payload
}

export const addToCart=(payload)=>{
    type: ADD_TO_CART,
    payload
}
