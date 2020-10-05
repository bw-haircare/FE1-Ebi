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
        const response= await axiosWithAuth().get("/api/users")
        dispatch({type: LOAD_USER, payload: response.data})
        dispatch(fetchAllClients())

    }catch(err){
        dispatch({type: AUTH_ERROR, payload: ErrorEvent})

    }
}

export const registerUser = (username, password, imgUrl)=> async dispatch =>{
    try{
      let newId;
        const config={headers:{"Content-Type":"application/json"}}
        const body = JSON.stringify({username, password, imgUrl:`https://api.adorable.io/avatars/avatar/${newId}`})
        const response= await axiosWithAuth().post("/api/auth/register", body, config)
    //   localStorage.setItem("token", response.data.token)
    localStorage.setItem('userID', response.data.id)
    console.log("HOLD UP NOW", response.data.data)
    newId += response.data.id
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
        const response= await axiosWithAuth().post("/api/auth/login", body, config)
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
      .get(`/api/users`)
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
      .get(`/api/users/user/${userID || localStorage.getItem("userID") }`)
      .then(res => {
        const users = res.data.map(item=>item)  
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
    try{
        const response= await axiosWithAuth().put(`/api/users/user/${userId.id}`, userId)
        dispatch({type: EDIT_PROFILE_SUCCESS,payload: response.data})
    }catch(err){
        dispatch({type: EDIT_PROFILE_FAIL, payload: err})
  
    }
  }

  export const fetchAllClients = () => dispatch => {
    axiosWithAuth()
      .get(`/api/users/${localStorage.getItem("userID")}/posts`)
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
      .get(`/api/users/${id}/posts`)
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
      let newID;
      let cat =5;
      console.log("CAT IDDDD", cat)

      const body={...newpost, client_ImgUrl: `https://api.adorable.io/avatars/avatar/${cat}`}
        const response= await axiosWithAuth().post(`/api/users/${localStorage.getItem("userID")}/posts`, body)
        // let cat;
        console.log("PAYLOAD NEW", response.data.id)
        cat += 10
        console.log("CAT IDDDDRRR", cat)
        dispatch({
            type: ADD_CLIENT,
            payload: response.data
        })
    }catch(err){
        dispatch({type: ADD_CLIENT_FAIL, payload: err.message})

    }
}

export const updateClient = (updatePost)=> async dispatch =>{
  try{
    const id = updatePost.id;
      const response= await axiosWithAuth().put(`/api/users/${id}/posts`, updatePost)
      dispatch({type: UPDATE_CLIENT,payload: response.data})
  }catch(err){
      dispatch({type: UPDATE_CLIENT_FAIL, payload: err})

  }
}


export const deleteClient = (clientId)=> async dispatch =>{
  try{

    await axiosWithAuth().delete(`/api/users/${clientId}/posts`)
      dispatch({type: DELETE_CLIENT_SUCCESS,payload: clientId})
      dispatch(fetchUser(localStorage.getItem("userID")))

  }catch(err){
      dispatch({type: DELETE_CLIENT_FAIL, payload: err})

  }
}





