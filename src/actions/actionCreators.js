import {
  ADD_BOOK,
  REMOVE_BOOK,
  BOOKMARK_BOOK,
  SET_FILTER
} from "actions/actionTypes.js";

let BookId = 4;

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

export const deletebook = id => ({
  type: REMOVE_BOOK,
  id: id
});

export const bookmarkBook = id => ({
  type: BOOKMARK_BOOK,
  id: id
});

export const setVisibilityFilter = filter => ({
  type: SET_FILTER,
  filter
});
