import {userAction} from '../Action/actionConst'
const initialState = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    authenticated:false,
    authenticating:"",
    message:"",
    full_name:""

}
const UserReducer =(state=initialState,action)=>{
    console.log("user action",action);
    switch(action.type){
        case `${userAction.USER_REGISTER}_REQUEST`:
            return{
                ...state
            }
        case `${userAction.USER_REGISTER}_SUCCESSFUL`:
            return{
                ...state,
                message:action.payload.message
            }
        case `${userAction.USER_REGISTER}_FAILURE`:
            return{
                ...state,
                error:action.payload.error
            }
        case `${userAction.USER_LOGIN}_LOGIN_REQUEST`:
            return{
                ...state
            }
        case `${userAction.USER_LOGIN}_LOGIN_SUCCESS`:
            return{
                ...state,
                message:action.payload.message, 
                full_name:action.payload.full_name,
                authenticated:true,
                authenticating:action.payload.token
            }
        case `${userAction.USER_LOGIN}_LOGIN_FAILURE`:
            return{
                ...state,
                error:action.payload.error
            }
        default:
            return state;
    }
}
export default UserReducer;