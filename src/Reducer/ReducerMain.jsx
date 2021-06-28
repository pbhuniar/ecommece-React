import {combineReducers} from 'redux'
import userReducer from './userReducer'
import Allproduct from './productReducer'
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
    userData:userReducer,
    newProduct:Allproduct,
    newCart:cartReducer
})
export default rootReducer