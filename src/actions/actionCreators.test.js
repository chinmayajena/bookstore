import React from "react";
import { addBook, deleteBook, bookmarkBook } from "./actionCreators.js";
import { ADD_BOOK, REMOVE_BOOK, BOOKMARK_BOOK } from "actions/actionTypes.js";

describe("actionCreators", () => {
  it("addBook creates correct json for reducer", () => {
    const newBookObj = {
      name: "Test Book",
      author: "Test Author",
      description: "I am Test Description",
      isBookmarked: false,
      category: "Philosophy",
      content: "Test Content"
    };

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
});
