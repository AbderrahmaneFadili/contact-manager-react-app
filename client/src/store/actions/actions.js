import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_START,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_START,
  DELETE_CONTACT_START,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_START,
  EDIT_CONTACT_FAILURE,
} from "../types/types";

//add contact
export const addContact = (contact) => (dispatch) => {
  dispatch({ type: ADD_CONTACT_START });
  fetch("http://localhost:3006/contacts", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: ADD_CONTACT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_CONTACT_FAILURE,
      });
    });
};

//get all contacts
export const getAllContatcs = () => (dispatch) => {
  dispatch({ type: FETCH_CONTACTS_START });
  fetch("http://localhost:3006/contacts")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: FETCH_CONTACTS_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_CONTACTS_FAILURE,
        payload: err,
      });
    });
};

//delete contact
export const deleteContact = (contactId) => (dispatch) => {
  dispatch({ type: DELETE_CONTACT_START });
  fetch("http://localhost:3006/contacts/" + contactId, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: DELETE_CONTACT_FAILURE,
      });
    });
};

//edit contact
export const editContact = (contactId, contact) => (dispatch) => {
  dispatch({ type: EDIT_CONTACT_START });
  fetch("http://localhost:3006/contacts/" + contactId, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: EDIT_CONTACT_FAILURE,
      });
    });
};
