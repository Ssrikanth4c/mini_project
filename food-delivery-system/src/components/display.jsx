import React from "react";
import { connect } from 'react-redux' 

const Display=({restName})=>{
    return(
        <div>
            sree
            {restName?.map(ele=>ele.restaurantName)}
        </div>
    )
}
const mapStateToProps=state=>({
    restName: state.restData,
    search:state.search
})
export default connect(mapStateToProps)(Display)