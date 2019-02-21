import bookReducer from "./BookReducer.js";
import {
  ADD_BOOK,
  REMOVE_BOOK,
  BOOKMARK_BOOK,
  UPDATE_BOOK
} from "actions/actionTypes.js";

describe("BookReducer", () => {
  it("should handle ADD_BOOK", () => {
    expect(
      bookReducer([], {
        type: ADD_BOOK,
        id: 4,
        name: "Ken n Abel",
        author: "Jeffry Archer",
        description: "A philosophical book regarding life journey",
        category: "Philosophy",
        content: "Some book content",
        isBookmarked: false
      })
    ).toEqual([
      {
        id: 4,
        name: "Ken n Abel",
        author: "Jeffry Archer",
        description: "A philosophical book regarding life journey",
        category: "Philosophy",
        content: "Some book content",
        isBookmarked: false
      }
    ]);
  });

  it("should handle REMOVE_BOOK", () => {
    expect(
      bookReducer(
        [
          {
            id: 4,
            name: "Ken n Abel",
            author: "Jeffry Archer",
            description: "A philosophical book regarding life journey",
            category: "Philosophy",
            content: "Some book content",
            isBookmarked: false
          }
        ],
        {
          type: REMOVE_BOOK,
          id: 4
        }
      )
    ).toEqual([]);
  });

  it("should handle BOOKMARK_BOOK", () => {
    expect(
      bookReducer(
        [
          {
            id: 4,
            name: "Ken n Abel",
            author: "Jeffry Archer",
            description: "A philosophical book regarding life journey",
            category: "Philosophy",
            content: "Some book content",
            isBookmarked: false
          }
        ],
        {
          type: BOOKMARK_BOOK,
          id: 4
        }
      )
    ).toEqual([
      {
        id: 4,
        name: "Ken n Abel",
        author: "Jeffry Archer",
        description: "A philosophical book regarding life journey",
        category: "Philosophy",
        content: "Some book content",
        isBookmarked: true
      }
    ]);
  });

  it("should handle UPDATE_BOOK", () => {
    expect(
      bookReducer(
        [
          {
            id: 4,
            name: "Ken n Abel",
            author: "Jeffry Archer",
            description: "A philosophical book regarding life journey",
            category: "Philosophy",
            content: "Some book content",
            isBookmarked: false
          }
        ],
        {
          type: UPDATE_BOOK,
          id: 4,
          name: "Ken n Abel",
          author: "Jeffry Archer",
          description: "A philosophical book regarding life journey",
          category: "fiction",
          content: "Some book content",
          isBookmarked: false
        }
      )
    ).toEqual([
      {
        id: 4,
        name: "Ken n Abel",
        author: "Jeffry Archer",
        description: "A philosophical book regarding life journey",
        category: "fiction",
        content: "Some book content",
        isBookmarked: false
      }
    ]);
  });
});
