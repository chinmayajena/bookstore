import { combineReducers } from "redux";
import books from "./BookReducer.js";
import visibilityFilter from "./FilterReducer.js";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  books,
  visibilityFilter,
  form: formReducer
});
