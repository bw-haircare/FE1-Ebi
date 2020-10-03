import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    LOAD_USER_SUCCESS,
    ADD_CLIENT,
    ADD_CLIENT_FAIL,
    LOAD_CLIENTS_SUCCESS,
    LOAD_CLIENT_PORTFOLIO,
    LOAD_FAIL,
    AUTH_ERROR, 
    UPDATE_CLIENT, 
    UPDATE_CLIENT_FAIL,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_FAIL, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAIL,
    LOAD_USERS_INFO_SUCCESS
  } from "../constants/constants";
  import {axiosWithAuth} from '../utilities/axiosWithAuth'
  import { setToken } from "../setToken";
export const LoadUser = ()=> async dispatch=>{
    if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
    }
    try{ 
        const response= await axiosWithAuth().get("http://localhost:3200/api/users")
        dispatch({type: LOAD_USER, payload: response.data})
        console.log("it's also grabbing all clients")
        dispatch(fetchAllClients())

    }catch(err){
        dispatch({type: AUTH_ERROR, payload: ErrorEvent})

    }
}

export const registerUser = (username, password, imgUrl)=> async dispatch =>{
    try{
        const config={headers:{"Content-Type":"application/json"}}
        const body = JSON.stringify({username, password, imgUrl})
        const response= await axiosWithAuth().post("http://localhost:3200/api/auth/register", body, config)
    //   localStorage.setItem("token", response.data.token)
    localStorage.setItem('userID', response.data.id)
    console.log("HOLD UP NOW", response.data.data)
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
        const response= await axiosWithAuth().post("http://localhost:3200/api/auth/login", body, config)
        localStorage.setItem('userID', response.data.id)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
        dispatch(LoadUser())


    }catch(err){
        dispatch({type: LOGIN_FAIL, payload: err})

    }
}

export const fetchAllUsers = () => dispatch => {
    axiosWithAuth()
      .get(`http://localhost:3200/api/users`)
      .then(res => {
        const users = res.data.map(item => item);
        dispatch({ type: LOAD_USERS_INFO_SUCCESS, payload: users });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOAD_FAIL,
          payload: `${err} with response code ${err}`
        });
      });
  };


  export const fetchUser = (userID) => dispatch => {
    axiosWithAuth()
      .get(`http://localhost:3200/api/users/user/${userID}`)
      .then(res => {
        const users = res.data.map(item=>item)
        console.log("THIS IS THE USER", userID)
  
        dispatch({ type: LOAD_USER_SUCCESS, payload: users[0] });
      dispatch(fetchAllClients())
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOAD_FAIL,
          payload: `${err} with response code ${err}`
        });
      });
  };

  export const updateUser = (userId)=> async dispatch =>{
    console.log("UPDATE USER", userId)
    try{
        const response= await axiosWithAuth().put(`http://localhost:3200/api/users/user/${userId.id}`, userId)
        dispatch({type: EDIT_PROFILE_SUCCESS,payload: response.data})
    }catch(err){
        dispatch({type: EDIT_PROFILE_FAIL, payload: err})
  
    }
  }

  export const fetchAllClients = () => dispatch => {
    axiosWithAuth()
      .get(`http://localhost:3200/api/users/${localStorage.getItem("userID")}/posts`)
      .then(res => {
        const users = res.data.map(item => item);
        dispatch({ type: LOAD_CLIENTS_SUCCESS, payload: users });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOAD_FAIL,
          payload: `${err} with response code ${err}`
        });
      });
  };


  export const fetchUserClientPortfolio = (id) => dispatch => {
    console.log("FETCHING CLIENTS FROM USER ID")
    axiosWithAuth()
      .get(`http://localhost:3200/api/users/${id}/posts`)
      .then(res => {
        const users = res.data.map(item => item);
        dispatch({ type: LOAD_CLIENT_PORTFOLIO, payload: users });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOAD_FAIL,
          payload: `${err} with response code ${err}`
        });
      });
  };


  export const newClient_ = (newpost)=> async dispatch =>{
    try{
        const response= await axiosWithAuth().post(`http://localhost:3200/api/users/${localStorage.getItem("userID")}/posts`, newpost)
    // console.log("HOLD UP NOW", response.data)
    console.log("curios to see something")
        dispatch({
            type: ADD_CLIENT,
            // payload: response.data
        })
    }catch(err){
        dispatch({type: ADD_CLIENT_FAIL, payload: err.message})

    }
}

export const updateClient = (updatePost)=> async dispatch =>{
  try{
    const id = updatePost.id;
      const response= await axiosWithAuth().put(`http://localhost:3200/api/users/${id}/posts`, updatePost)
      dispatch({type: UPDATE_CLIENT,payload: response.data})
  }catch(err){
      dispatch({type: UPDATE_CLIENT_FAIL, payload: err})

  }
}


export const deleteClient = (clientId)=> async dispatch =>{
  try{
    await axiosWithAuth().delete(`http://localhost:3200/api/users/${clientId}/posts`)
      dispatch({type: DELETE_CLIENT_SUCCESS,payload: clientId})
      dispatch(fetchUser())

  }catch(err){
      dispatch({type: DELETE_CLIENT_FAIL, payload: err})

  }
}





