import React from 'react'
import {Switch, Route} from 'react-router-dom'

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact render={()=><div>Home sree</div>} />
            <Route path='/add_restaurants' render={()=><div>Add Restaurants</div>} />
            <Route path='/report' render={()=><div>Reports page</div>} />
            <Route path='/cart' render={()=><div>Cart</div>} />
        </Switch>
    )
}