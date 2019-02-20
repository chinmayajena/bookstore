import {
  ADD_BOOK,
  REMOVE_BOOK,
  BOOKMARK_BOOK,
  SET_FILTER,
  UPDATE_BOOK,
  UPDATE_BOOK_PROGRESS
} from "actions/actionTypes.js";

let BookId = 5;

export const addBook = ({
  name,
  author,
  description,
  isBookmarked,
  category,
  content
}) => ({
  type: ADD_BOOK,
  id: BookId++,
  name,
  author,
  description,
  category,
  content,
  isBookmarked
});

export const deleteBook = id => ({
  type: REMOVE_BOOK,
  id: id
});

export const updateBook = ({
  id,
  name,
  author,
  description,
  isBookmarked,
  category,
  content
}) => ({
  type: UPDATE_BOOK,
  id,
  name,
  author,
  description,
  isBookmarked,
  category,
  content
});

export const updateBookProgress = id => ({
  type: UPDATE_BOOK_PROGRESS,
  id: id
});

export const bookmarkBook = id => ({
  type: BOOKMARK_BOOK,
  id: id
});

export const sortBy = sortType => ({
  type: "SORT_BY",
  sortType
});

export const clear = () => ({
  type: "CLEAR",
  defaultFilter: "defaultState"
});

export const search = filter => ({
  type: SET_FILTER,
  filter
});
