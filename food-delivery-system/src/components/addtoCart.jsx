import React from 'react'
import {connect} from 'react-redux'
import { addToCart } from '../redux/action'
const AddtoCart=(cart)=>{
    console.log(cart.cart)
    let addToCartArr= cart.cart
    let TotalCost=0
    return (

        <div>
            <h3 className="text-primary">
            Add to Cart
            </h3>
            <div className='container w-25 border border-info'>
                <div className='row border border-info'>

                    {addToCartArr.length!==0? '': <h3 className='text-center'>Your Cart is Empty</h3>}
                    {addToCartArr.map((item, ind)=>(
                        <div key={item.id} className="col-12 border border-info">
                            <div className='text-right'>{item.FoodItem}--<b> &#8377; {item.price}</b></div>
                        </div>
                    ))}
                   
                    
                </div>
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