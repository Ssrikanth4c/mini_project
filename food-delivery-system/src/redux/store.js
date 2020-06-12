import reducer from './reducer'
import {createStore} from 'redux'

// create store
const store=createStore(reducer)

export default store