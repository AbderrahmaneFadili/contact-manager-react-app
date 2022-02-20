import { createStore, applyMiddleware } from "redux";
import contactsReducer from "./reducers/reducers";
import thunk from "redux-thunk";

const store = createStore(contactsReducer, applyMiddleware(thunk));
export default store;
