import { combineReducers } from "redux";
import books from "./BookReducer.js";
import visibilityFilter from "./FilterReducer.js";
import sortBy from "./SortReducer.js";

export default combineReducers({
  books,
  visibilityFilter,
  sortBy
});
