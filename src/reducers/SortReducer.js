import {
  DEFAULT_SORT,
  SORT_BY_AUTHOR,
  SORT_BY_BOOK_NAME
} from "actions/actionTypes";

const sortBy = (state = "DEFAULT", action) => {
  switch (action.type) {
    case SORT_BY_AUTHOR:
      return SORT_BY_AUTHOR;
    case SORT_BY_BOOK_NAME:
      return SORT_BY_BOOK_NAME;
    default:
      return state;
  }
};

export default sortBy;
