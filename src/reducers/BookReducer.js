import { ADD_BOOK } from "actions/actionTypes";

const INITIAL_DATA = [
  {
    id: 1,
    name: "The Alchemist",
    author: "Paulo Cohelo",
    description: "A philosophical book regarding life journey",
    category: "Philosophy",
    content: "Some book content",
    isBookmarked: false
  }
];

const BookReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          category: action.category,
          content: action.content,
          isBookmarked: false
        }
      ];
    default:
      return state;
  }
};
export default BookReducer;
