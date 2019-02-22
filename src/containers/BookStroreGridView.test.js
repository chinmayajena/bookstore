import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedBookStoreGridView, {
  BookStoreGridView
} from "./BookStoreGridView.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

let initialState = [
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
    name: "The Digital Fortress",
    author: "Dawn Brown",
    description: "A techno-thriller novel ",
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
  },

  {
    id: 5,
    name: "Start With Why",
    author: "Simon Sinek",
    description: "A philosophical book regarding life journey",
    category: "non-fiction",
    content: "Some book content",
    isBookmarked: false
  }
];
const mockDeletefn = jest.fn();
const mockBookmarkfn = jest.fn();
const mockUpdateProgressfn = jest.fn();
let appHistory = [];

describe("<BookStoreFilter />", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <BookStoreGridView
        books={initialState}
        deleteBook={mockDeletefn}
        bookmarkBook={mockBookmarkfn}
        updateBookProgress={mockUpdateProgressfn}
        history={appHistory}
      />
    );
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find("ErrorBoundary");
    expect(wrapper.length).toBe(1);
  });

  it("deleteBook is called when dropdwon value changes", () => {
    component.find("#delete-btn-gridview-1").simulate("click");
    expect(mockDeletefn.mock.calls.length).toBe(1);
  });

  it("bookmarkBook is called when input value changes", () => {
    component.find("#bookmark-btn-gridview-1").simulate("click");
    expect(mockBookmarkfn.mock.calls.length).toBe(1);
  });

  it("updateBookProgress is called when button clicked", () => {
    component.find("#edit-btn-gridview-1").simulate("click");
    expect(mockUpdateProgressfn.mock.calls.length).toBe(1);
  });
});

describe("<ConnectedBookStoreFilter />", () => {
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();

    container = mount(
      <Provider store={store}>
        <BookStoreGridView
          books={initialState}
          deleteBook={mockDeletefn}
          bookmarkBook={mockBookmarkfn}
          updateBookProgress={mockUpdateProgressfn}
        />
      </Provider>
    );
  });

  it("+++ render the connected component", () => {
    expect(container.debug()).toMatchSnapshot();
    expect(container.length).toEqual(1);
  });
});
