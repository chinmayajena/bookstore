import { ADD_BOOK, REMOVE_BOOK } from "actions/actionTypes";

const INITIAL_DATA = [
  {
    id: 1,
    name: "The Alchemist",
    author: "Paulo Cohelo",
    description: "A philosophical book regarding life journey",
    category: "Philosophy",
    content: "Some book content",
    isBookmarked: false
  },
  {
    id: 2,
    name: "The Deep Horizon",
    author: "Dawn Brown",
    description: "A philosophical book regarding life journey",
    category: "Philosophy",
    content: "Some book content",
    isBookmarked: false
  },
  {
    id: 3,
    name: "Ken n Abel",
    author: "Jeffry Archer",
    description: "A philosophical book regarding life journey",
    category: "Philosophy",
    content: "Some book content",
    isBookmarked: false
  },
  {
    id: 4,
    name: "Ken n Abel",
    author: "Jeffry Archer",
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
          author: action.author,
          description: action.description,
          category: action.category,
          content: action.content,
          isBookmarked: action.isBookmarked || false
        }
      ];
    case REMOVE_BOOK:
      const numIndex = parseInt(action.id);
      return state.filter(book => book.id !== numIndex);
    default:
      return state;
  }
};
export default BookReducer;
