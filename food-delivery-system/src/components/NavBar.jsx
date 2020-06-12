import React from 'react'
import {Route, Link, Switch} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* Banner */}
                <div className="text-center alert alert-danger alert-dismissible fade show text-danger" role="alert">
                    <strong>Get 20% </strong> off in this season.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
                    <Link to='/' className="navbar-brand text-danger"><h3>Food Delivery</h3></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                      <ul className="navbar-nav ">
                        
                        <li className="nav-item active">
                          <Link to='/add_restaurants' className="nav-link" >Add Restaurants</Link>
                        </li>
                        <li className="nav-item active">
                          <Link to='/report' className="nav-link" >Reports <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                          <Link to='/price' className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item active">
                          <Link to='/price' className="nav-link" >Contact</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/cart'>
                                <button  type="button" className="btn btn-outline-warning "> <svg class="bi bi-cart3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>  Cart</button >
                            </Link>
                        </li>
                        
                      </ul>
                    </div>
                </nav>

                
            </React.Fragment>
        )
    }
}
