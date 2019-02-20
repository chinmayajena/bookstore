import { SET_FILTER, UPDATE_BOOK_PROGRESS, SORT_BY } from "actions/actionTypes";

let filterDefaultState = {
  text: "",
  sortBy: "name",
  updateRecordId: undefined
};

const visibilityFilter = (state = filterDefaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, text: action.filter };
    case UPDATE_BOOK_PROGRESS:
      return { ...state, updateRecordId: action.id };
    case SORT_BY:
      return { ...state, sortBy: action.sortType };
    default:
      return state;
  }
};

export default visibilityFilter;
