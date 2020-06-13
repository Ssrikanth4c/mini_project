import React from "react";
const Display=({data, addToCardHandler})=>{
    console.log(data)
    return(
        <div className='card'>
            <img className='card-img-top' style={{height:'100%', width:'100%'}} src={data.img} alt='Food_Item_Img'/>
                <h5 className='mt-1 card-title'>{data.FoodItem}</h5>
            
    <b>Price: <span className='text-danger'>&#8377;</span>{data.price}</b>
            
            <button className='btn btn-primary'
                onClick={()=>{addToCardHandler(data.id)}}
            >
                Add to Cart
            </button>          
        </div>
    )
}
export default Display