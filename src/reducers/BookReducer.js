import {
  ADD_BOOK,
  REMOVE_BOOK,
  BOOKMARK_BOOK,
  UPDATE_BOOK
} from "actions/actionTypes";

const INITIAL_DATA = [
  {
    id: 1,
    name: "The Alchemist",
    author: "Paulo Cohelo",
    description: "A philosophical book regarding life journey",
    category: "fiction",
    content: "Some book content",
    isBookmarked: false
  },
  {
    id: 2,
    name: "The Deep Horizon",
    author: "Dawn Brown",
    description: "A philosophical book regarding life journey",
    category: "fiction",
    content: "Some book content",
    isBookmarked: false
  },
  {
    id: 3,
    name: "Harry Potter",
    author: "J K Rowling",
    description: "A philosophical book regarding life journey",
    category: "fiction",
    content: "Some book content",
    isBookmarked: true
  },
  {
    id: 4,
    name: "Kane n Abel",
    author: "Jeffry Archer",
    description: "A philosophical book regarding life journey",
    category: "fiction",
    content: "Some book content",
    isBookmarked: false
  }
];

const BookReducer = (state = INITIAL_DATA, action) => {
  let recordIndex = parseInt(action.id);

  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          author: action.author,
          description: action.description,
          category: action.category,
          content: action.content,
          isBookmarked: action.isBookmarked || false
        }
      ];

    case REMOVE_BOOK:
      return state.filter(book => book.id !== recordIndex);

    case BOOKMARK_BOOK:
      let foundRecord = state.filter(book => book.id === recordIndex);
      let updatedRecord = {};
      if (foundRecord.length > 0) {
        let bookmarkValue = foundRecord[0].isBookmarked;
        updatedRecord = { ...foundRecord[0], isBookmarked: !bookmarkValue };
      }
      return [...state.filter(book => book.id !== recordIndex), updatedRecord];

    case UPDATE_BOOK:
      let otherRecords = state.filter(book => book.id !== recordIndex);
      return [
        ...otherRecords,
        {
          id: action.id,
          name: action.name,
          author: action.author,
          description: action.description,
          category: action.category,
          content: action.content,
          isBookmarked: action.isBookmarked || false
        }
      ];

    default:
      return state;
  }
};
export default BookReducer;
