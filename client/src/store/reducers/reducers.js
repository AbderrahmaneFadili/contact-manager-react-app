import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_START,
  FETCH_CONTACTS_START,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_START,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_START,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
} from "../types/types";

const initialState = {
  loading: false,
  contacts: [],
  error: null,
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //Add types
    case ADD_CONTACT_START:
      console.log("ADD CONTACT START");
      return state;

    case ADD_CONTACT_SUCCESS:
      console.log("ADD CONTACT SUCCESS");
      return state;

    case ADD_CONTACT_FAILURE:
      console.log("ADD CONTACT FAILURE");
      return state;

    //delete types
    case DELETE_CONTACT_START:
      console.log("DELETE CONTACT START");
      return state;
    case DELETE_CONTACT_SUCCESS:
      console.log("DELETE CONTACT SUCCESS");
      return state;
    case DELETE_CONTACT_FAILURE:
      console.log("DELETE CONTACT FAILURE");
      return state;

    //edit types
    case EDIT_CONTACT_START:
      console.log("EDIT CONTACT START");
      return state;
    case EDIT_CONTACT_SUCCESS:
      console.log("EDIT CONTACT SUCCESS");
      return state;
    case EDIT_CONTACT_FAILURE:
      console.log("EDIT CONTACT FAILURE");
      return state;
    //fetch all contacts
    case FETCH_CONTACTS_START:
      return {
        ...state,
        loading: true,
        contacts: [],
        error: null,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: payload,
        error: null,
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        contacts: [],
        error: payload.err,
      };
    default:
      return state;
  }
};

export default contactsReducer;
