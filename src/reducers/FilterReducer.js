import {
  SHOW_ALL,
  SET_VISIBILITY_FILTER,
  UPDATE_BOOK_PROGRESS
} from "actions/actionTypes";

let filterDefaultState = {
  text: "",
  sortBy: "",
  updateRecordId: undefined
};

const visibilityFilter = (state = filterDefaultState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    case UPDATE_BOOK_PROGRESS:
      return { ...state, updateRecordId: action.id };
    default:
      return state;
  }
};

export default visibilityFilter;
