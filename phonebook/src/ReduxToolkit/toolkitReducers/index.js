import { combineReducers } from "redux";
import contacts from "./contacts";
import token from "./tokenReducer"

const rootReducer = combineReducers({
  contacts,
  token,
});

export default rootReducer;