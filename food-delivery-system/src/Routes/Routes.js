import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/home'
import AddRestaurants from '../components/addRestaurants'
import Reports from '../components/reports'
import AddtoCart from '../components/addtoCart'
export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact render={()=><Home />} />
            <Route path='/add_restaurants' render={()=><AddRestaurants />} />
            <Route path='/report' render={()=><Reports /> } />
            <Route path='/cart' render={()=><AddtoCart />} />
        </Switch>
    )
}