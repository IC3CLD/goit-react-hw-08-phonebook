import axios from "axios";
import contactsAction from "../toolkitActions/contacts";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const addContact = (token, name, number) => (dispatch) => {
  dispatch(contactsAction.addContactRequest());
  axios.defaults.headers.common["Authorization"] = token;

  axios
    .post("contacts", { name, number })
    .then(({ data }) => dispatch(contactsAction.addContactSuccess(data)))
    .catch((error) => dispatch(contactsAction.addContactError(error)));
};

const fetchContacts = (token) => (dispatch) => {
  dispatch(contactsAction.fetchContactsRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .get("contacts")
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsAction.fetchContactsError(error)));
};

const deleteContact = (token, id) => (dispatch) => {
  dispatch(contactsAction.deleteContactRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactsAction.deleteContactError(error)));
};

const getUser = (token) => (dispatch) => {
  dispatch(contactsAction.deleteContactRequest());
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .get(`/users/current`)
    .then((res) => dispatch(contactsAction.fetchUserName(res.data.name)))
    .catch((error) => dispatch(contactsAction.fetchContactsError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
  getUser,
};
