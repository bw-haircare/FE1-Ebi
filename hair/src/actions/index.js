import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_STYLISTS_START = "FETCH_STYLISTS_START";
export const FETCH_STYLISTS_SUCCESS = "FETCH_STYLISTS_SUCCESS";
export const FETCH_STYLISTS_FAILURE = "FETCH_STYLISTS_FAILURE";

export const ADD_STYLIST_START = "ADD_STYLIST_START";
export const ADD_STYLIST_SUCCESS = "ADD_STYLIST_SUCCESS";
export const ADD_STYLIST_FAILURE = "ADD_STYLIST_FAILURE";

export const DELETE_STYLIST = "DELETE_STYLIST";

export const STYLIST_UPDATE_START = "STYLIST_UPDATE_START";
export const STYLIST_UPDATE_SUCCESS = "STYLIST_UPDATE_SUCCESS";
export const STYLIST_UPDATE_FAILURE = "STYLIST_UPDATE_FAILURE";

export const TOGGLE_STYLIST = "TOGGLE_STYLIST";

// Login

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://hairecare-bw.herokuapp.com/oauth/token", creds, {
      headers: {
        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => {
      localStorage.setItem("token", res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log("ERROR", err));
};

// Register new user

// Fetch Stylists

export const fetchStylists = () => dispatch => {
  dispatch({ type: FETCH_STYLISTS_START });
  axios
    .get("https://hairecare-bw.herokuapp.com/oauth/token", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_STYLISTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_STYLISTS_FAILURE, payload: err });
    });
};

// Add Stylist

export const addStylist = newStylist => dispatch => {
  dispatch({ type: ADD_STYLIST_START });
  axios
    .post("https://haircare-bw.herokuapp.com/api/stylists/", newStylist, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_STYLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_STYLIST_FAILURE, payload: err.response });
    });
};

// Delete Stylist

export const deleteStylist = id => dispatch => {
  return axiosWithAuth()
    .delete(`https://haircare-bw.herokuapp.com/api/stylists/${id}`)
    .then(res => {
      dispatch({ type: DELETE_STYLIST, payload: res.data.id });
    })
    .catch(err => {
      console.log(err);
    });
};

// Update Stylist

export const updateTodo = (id, changes) => dispatch => {
  console.log(changes);
  dispatch({ type: STYLIST_UPDATE_START });
  return axiosWithAuth()
    .put(`https://haircare-bw.herokuapp.com/api/stylists/${id}`, changes)
    .then(res => {
      dispatch({ type: STYLIST_UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: STYLIST_UPDATE_FAILURE, payload: err });
    });
};

// View profile by ID

// Edit profile

// Delete profile

export function toggleStylist(index) {
  return {
    type: TOGGLE_STYLIST,
    payload: index
  };
}
