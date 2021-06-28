import axios from 'axios'

import {userProduct} from './actionConst'
export const product1=()=>{
    return async (dispatch)=>{
        dispatch({type:`${userProduct.PRODUCT}_REQUEST`})

        axios.get(`https://fakestoreapi.com/products`).then((res)=>
        {
            const person = res.data;
            console.log("res",res);
            console.log("person",person);
            dispatch({type:`${userProduct.PRODUCT}_SUCCESS`,payload:{data:person}})

        })
        .catch((err)=>{

            dispatch({type:`${userProduct.PRODUCT}_FAIL`,payload:{error:"product API not working"}})
        })

    }
}
export const productid=(id)=>{
    return async (dispatch)=>{
        dispatch({type:`${userProduct.PRODUCT_VIEW}_REQUEST`})
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            const id = res.data
            dispatch({type:`${userProduct.PRODUCT_VIEW}_SUCCESS`,payload:{view:id}})

        })
        .catch((err)=>{

            dispatch({type:`${userProduct.PRODUCT_VIEW}_FAIL`,payload:{error:"product id is not found"}})
        })
    }

}
