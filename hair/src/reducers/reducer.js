import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOAD_USER_SUCCESS,
  } from "../constants/constants";
  
  const initialState = {
    stylists: [],
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
        // localStorage.removeItem("token")
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
              stylists: action.payload,
              error: null
            };

  
      default:
        return state;
    }
  };
  
  export default reducer;
  