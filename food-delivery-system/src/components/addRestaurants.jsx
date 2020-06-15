import React from 'react'
// import uuid from 'react-uuid'
import {connect} from 'react-redux'
import {addRestaurants}  from  '../redux/action'

 class AddRestaurants extends React.Component{
     constructor(props){
         super(props)
         this.state={
            FoodItem:"",
            id: "",
            img:"",
            price: "",
            restaurantName:""
         }
     }
     render(){
        const {FoodItem, id, img, price, restaurantName}= this.state
        const {addRestaurants}= this.props
         return(
           <div className='container'>
            <div className="container m-2 mx-5 border border-info justify-content-center" >
                <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="restName">RestaurantName</label>
                        <input type="text" 
                            value={restaurantName} 
                            name={restaurantName} 
                            class="form-control" 
                            onChange={e=>this.setState({restaurantName:e.target.value})}
                            />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="img">image_url</label>
                        <input type="text" 
                            value={img} 
                            name={img} 
                            class="form-control" 
                            onChange={e=>this.setState({img:e.target.value})}
                            />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="foodItem">FoodItem</label>
                        <input type="text" 
                            class="form-control" 
                            value={FoodItem}
                            name={FoodItem}
                            onChange={e=>this.setState({FoodItem: e.target.value})}
                            />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="price">Item Price</label>
                        <input type="text" class="form-control"
                            value={price}
                            name={price}
                            onChange={e=>this.setState({price: e.target.value})}
                            />
                      </div>
                    </div>
                    <button type="submit" 
                        class="btn btn-primary mb-2"
                        onClick={(e)=>{
                          e.preventDefault()
                          
                          addRestaurants(this.state)}
                        }
                        >
                        Submit
                    </button>
                </form>
                
            </div>
          </div>
        )   
    }
};
const mapDispatchToProps=dispatch=>({
    addRestaurants: payload=> dispatch(addRestaurants(payload))
})
export default connect(null,mapDispatchToProps)(AddRestaurants)