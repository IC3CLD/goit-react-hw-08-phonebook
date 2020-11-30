import axios from "axios";
import contactsAction from "../toolkitActions/contacts";
import authActions from "../toolkitActions/auth"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";


export const registerOperation = (userData) => (dispatch) => {
  axios
    .post("users/signup", userData)
    .then((result) => dispatch(authActions.setToken(result.data.token)))
    .catch((error)=> dispatch(contactsAction.changeError(true)))
};

export const loginOperation = (userData) => (dispatch) => {
  axios
    .post("users/login", userData)
    .then((result) => dispatch(authActions.setToken(result.data.token)))
    .catch((error)=> dispatch(contactsAction.changeError(true)))

};


export const logoutOperation = (token) => (dispatch) => {
  axios.defaults.headers.common['Authorization'] = token;
  axios
    .post("users/logout", token)
    .then(res=> dispatch(authActions.clearToken()))
    .catch((error)=> dispatch(contactsAction.changeError(true)))
};