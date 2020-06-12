import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import Route from './Routes/Routes'
import NavBar from './components/NavBar';

export default function App(){
  return(
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Route />
        </div>
      </Provider> 
    </BrowserRouter>  
  )
}