import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // baseURL:"http://localhost:3200",
    baseURL: "https://stylist-directory.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
