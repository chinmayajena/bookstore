import {
  addBook,
  deleteBook,
  bookmarkBook,
  updateBook,
  updateBookProgress,
  sortBy,
  sortOrder,
  search
} from "./actionCreators.js";
import {
  ADD_BOOK,
  REMOVE_BOOK,
  BOOKMARK_BOOK,
  UPDATE_BOOK,
  UPDATE_BOOK_PROGRESS,
  SORT_BY,
  SORT_ORDER,
  SET_FILTER
} from "actions/actionTypes.js";

describe("actionCreators", () => {
  const newBookObj = {
    name: "Test Book",
    author: "Test Author",
    description: "I am Test Description",
    isBookmarked: false,
    category: "Philosophy",
    content: "Test Content"
  };
  it("addBook creates correct json for reducer", () => {
    expect(addBook(newBookObj)).toEqual({
      ...newBookObj,
      id: 5,
      type: ADD_BOOK
    });
  });

  it("deleteBook creates correct json for reducer", () => {
    expect(deleteBook(5)).toEqual({
      type: REMOVE_BOOK,
      id: 5
    });
  });

  it("bookmarkBook creates correct json for reducer", () => {
    expect(bookmarkBook(5)).toEqual({
      type: BOOKMARK_BOOK,
      id: 5
    });
  });

  it("updateBook creates correct json for reducer", () => {
    expect(updateBook(newBookObj)).toEqual({
      type: UPDATE_BOOK,
      ...newBookObj
    });
  });

  it("updateBookProgress creates correct json for reducer", () => {
    expect(updateBookProgress(5)).toEqual({
      type: UPDATE_BOOK_PROGRESS,
      id: 5
    });
  });

  it("sortBy creates correct json for reducer", () => {
    expect(sortBy("name")).toEqual({
      type: SORT_BY,
      sortType: "name"
    });
  });

  it("sortOrder creates correct json for reducer", () => {
    expect(sortOrder("asc")).toEqual({
      type: SORT_ORDER,
      sortOrder: "asc"
    });
  });

  it("search creates correct json for reducer", () => {
    expect(search("cohelo")).toEqual({
      type: SET_FILTER,
      filter: "cohelo"
    });
  });
});
