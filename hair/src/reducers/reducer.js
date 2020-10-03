import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    LOAD_FAIL,
    AUTH_ERROR,
    ADD_CLIENT,
    ADD_CLIENT_FAIL,
    LOAD_USERS_INFO_SUCCESS,
    LOAD_CLIENT_PORTFOLIO,
    LOAD_USER_SUCCESS,
    LOAD_CLIENTS,
    LOAD_CLIENTS_SUCCESS, 
    UPDATE_CLIENT,
    UPDATE_CLIENT_FAIL,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_FAIL
    
  } from "../constants/constants";
  
  const initialState = {
    user_info:[],
    stylists: [],
    clients_id:[],
    new_client:[],
    new_deleted_client:[],
    clients:[],
    isPosting: false,
    loggingIn: false,
    error: null,
    loading: true,
    token: localStorage.getItem("token")
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
          localStorage.setItem("token", action.payload.token)
        return {
          ...state,
          loggingIn: false,
          error: false,
          token: action.payload.token
        };
      case LOAD_FAIL:
        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
      case AUTH_ERROR:
        localStorage.removeItem("token")

        return {
          ...state,
          loggingIn: false,
          error: action.payload
        };
      case LOAD_USER:
        return {
          ...state,
          loggingIn: true,
          error: null
        };
      
      case LOAD_USER_SUCCESS:
          return {
              ...state,
              // loggingIn:true,
              user_info: action.payload,
              error: null
            };

        case LOAD_USERS_INFO_SUCCESS:
      return {
          ...state,
          stylists: action.payload,
          error: null
        };

      case LOAD_CLIENT_PORTFOLIO:
        return {
          ...state,
          clients_id: action.payload,
          error: null
        };
      case LOAD_CLIENTS:      
      case LOAD_CLIENTS_SUCCESS:
          return {
              ...state,
              clients: action.payload,
              error: null
            };
      case UPDATE_CLIENT:
      case ADD_CLIENT:
      return {
        ...state,
        new_client:[action.payload],
        // clients: [action.payload],
        isPosting: false,
        error: false,
      };
      case DELETE_CLIENT_FAIL:
      case UPDATE_CLIENT_FAIL:
      case ADD_CLIENT_FAIL:
      return {
        ...state,
        ispPosting: false,
        error: action.payload
      };

      // case DELETE_CLIENT_SUCCESS:
      // console.log("action delete reducer", action.payload)
      // return {
      //   clients:[state.clients.filter(item=>item !== action.payload)]

      // }


      case DELETE_CLIENT_SUCCESS:
        console.log("action delete reducer", action.payload)
        console.log("DELETE STATE", state)
        return {...state, new_deleted_client: state.new_deleted_client.filter(todo => todo.id !== action.payload)}


      // case DELETE_CLIENT_SUCCESS:
      //   return {
      //       ...state,
      //       items: state.clients.filter(item => item !== action.payload)
      //   };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  