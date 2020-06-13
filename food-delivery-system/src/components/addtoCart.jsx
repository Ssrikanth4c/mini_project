import React from 'react'
import {connect} from 'react-redux'
const AddtoCart=(cart)=>{
    console.log(cart.cart)
    let addToCartArr= cart.cart
    return (

        <div>
            <h3 className="text-primary">
            Add to Cart
            </h3>
            <div>
                {}
            </div>

        </div>
    )
}

const mapStateToProps=state=>({
    cart: state.cartItems
})
// connect() ->connects React component to redux store
// you don't wan't dispathch action then pass null or by default component will receive dispatch
export default  connect(mapStateToProps)(AddtoCart)