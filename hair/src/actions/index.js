import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR,
  } from "../constants/constants";
  import {axiosWithAuth} from '../utilities/axiosWithAuth'

  import axios from "axios"

export const LoadUser = ()=> async dispatch=>{
    if (localStorage.getItem("token")){
        // setToken(localStorage.getItem("token"))
    }
    try{ 
        const response= await axiosWithAuth().get("http://localhost:3200/api/users")
        dispatch({type: LOAD_USER, payload: response.data})

    }catch(err){
        dispatch({type: AUTH_ERROR, payload: ErrorEvent})

    }
}

export const registerUser = (username, password)=> async dispatch =>{
    try{
        const config={headers:{"Content-Type":"application/json"}}
        const body = JSON.stringify({username, password})
        const response= await axios.post("http://localhost:3200/api/auth/register", body, config)
    //   localStorage.setItem("token", response.data.token)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })
        dispatch(LoadUser())


    }catch(err){
        dispatch({type: REGISTER_FAIL, payload: err})

    }
}

export const loginUser = (username, password)=> async dispatch =>{
    try{
        const config={headers:{"Content-Type":"application/json"}}
        const body = JSON.stringify({username, password})
        const response= await axios.post("http://localhost:3200/api/auth/login", body, config)
        // localStorage.setItem("token", response.data.token)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
        dispatch(LoadUser())


    }catch(err){
        dispatch({type: LOGIN_FAIL, payload: err})

    }
}


