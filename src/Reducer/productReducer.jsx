import {userProduct} from '../Action/actionConst'
const initialState = {
    productBox:[],
    productview:{},

}
const Allproduct = (state=initialState,action)=>{
    switch(action.type){
        case `${userProduct.PRODUCT}_REQUEST`:
            return state={
                ...state
            }
        case `${userProduct.PRODUCT}_SUCCESS`:
            return state={
                ...state,
                productBox:action.payload.data
            }
        case `${userProduct.PRODUCT}_FAIL`:
            return state={
                ...state,
                productBox:action.payload.error
            }
        case `${userProduct.PRODUCT_VIEW}_REQUEST`:
            return state={
                ...state
            }
        case `${userProduct.PRODUCT_VIEW}_SUCCESS`:
            return state={
                ...state,
                productview:action.payload.view

            }
        case `${userProduct.PRODUCT_VIEW}_FAIL`:
            return state={
                ...state
            }
            default:
                return state
    }
}
export default Allproduct