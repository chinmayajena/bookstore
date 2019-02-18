import React from "react";
import { shallow } from "enzyme";
import { addBook, deletebook, bookmarkBook } from "./actionCreators.js";
import {
  ADD_BOOK,
  REMOVE_BOOK,
  BOOKMARK_BOOK,
  SET_FILTER
} from "actions/actionTypes.js";

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
    expect(deletebook(5)).toEqual({
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
