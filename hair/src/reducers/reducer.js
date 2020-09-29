import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    ADD_CLIENT,
    LOAD_USER_SUCCESS,
    LOAD_CLIENTS,
    LOAD_CLIENTS_SUCCESS, ADD_CLIENT_FAIL
  } from "../constants/constants";
  
  const initialState = {
    stylists: [],
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
      case LOGIN_FAIL:
      case REGISTER_FAIL:
      case AUTH_ERROR:
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
      case LOAD_CLIENTS:
      case LOAD_USER_SUCCESS:
          return {
              ...state,
              stylists: action.payload,
              error: null
            };
      case LOAD_CLIENTS_SUCCESS:
          return {
              ...state,
              clients: action.payload,
              error: null
            };
      case ADD_CLIENT:
      return {
        ...state,
        clients: [action.payload],
        isPosting: false,
        error: false,
      };
      case ADD_CLIENT_FAIL:
      return {
        ...state,
        ispPosting: false,
        error: action.payload
      };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  