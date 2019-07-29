import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_STYLISTS_START,
  FETCH_STYLISTS_SUCCESS,
  FETCH_STYLISTS_FAILURE,
  ADD_STYLIST_START,
  ADD_STYLIST_SUCCESS,
  ADD_STYLIST_FAILURE,
  DELETE_STYLIST,
  STYLIST_UPDATE_SUCCESS,
  TOGGLE_STYLIST
} from "../actions/index";

const initialState = {
  stylists: [],
  loggingIn: false,
  error: null,
  loading: true,
  token: localStorage.getItem("token")
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCH_STYLISTS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_STYLISTS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null
      };
    case FETCH_STYLISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_STYLIST_START:
      return {
        ...state,
        loading: true
      };
    case ADD_STYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.stylists, action.payload]
      };
    case ADD_STYLIST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_STYLIST:
      return {
        ...state,
        todos: state.stylists.filter(stylist => stylist.id !== action.payload)
      };
    case STYLIST_UPDATE_SUCCESS:
      return {
        ...state,
        stylists: state.stylists.map(stylist =>
          stylist.id === action.payload.id ? action.payload : stylist
        )
      };
    case TOGGLE_STYLIST:
      return {
        ...state,
        todos: state.stylists.map((stylist, index) =>
          action.payload === index
            ? { ...stylist, completed: !stylist.completed }
            : stylist
        )
      };

    default:
      return state;
  }
};

export default reducer;
