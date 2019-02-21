import {
  SET_FILTER,
  UPDATE_BOOK_PROGRESS,
  SORT_BY,
  SORT_ORDER
} from "actions/actionTypes";

let filterDefaultState = {
  text: "",
  sortBy: "name",
  sortOrder: "asc",
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
    case SORT_ORDER:
      return {
        ...state,
        sortOrder: state.sortOrder === "asc" ? "desc" : "asc"
      };
    default:
      return state;
  }
};

export default visibilityFilter;
