import {userAction} from './actionConst'
import axios from 'axios'
export const register=(user) => {
    return async (dispatch) => {
        dispatch({ type: `${userAction.USER_REGISTER}_REQUEST`});
        axios.post(`https://api09.herokuapp.com/register`, user).then((res) => {
            const msg = res.data.message
            console.log(res.data);
            dispatch({ type: `${userAction.USER_REGISTER}_SUCCESSFUL`, payload: { message: msg } })


        }).catch((err)=>{
            dispatch({type:`${userAction.USER_REGISTER}_FAILURE`,payload:{error:"Data registration not successful"}})
        })
    }
}
export const signin = (user)=>{
    return async(dispatch)=>{
        dispatch({type:`${userAction.USER_LOGIN}_LOGIN_REQUEST`});
        axios.post(`https://api09.herokuapp.com/login`,user).then((res)=>{
            const msg = res.data.message
            const name = res.data.full_name
            const user_token = res.data.token
            console.log(res.data);
            dispatch({type:`${userAction.USER_LOGIN}_LOGIN_SUCCESS`,payload:{message:msg,full_name:name,token:user_token}})

            
        }).catch((err)=>{
            dispatch({type:`${userAction.USER_LOGIN}_LOGIN_FAILURE`,payload:{error:"user login failure"}})
        })
    }
}