import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedEditBook, { EditBook } from "./EditBook.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const initialState = {
  books: [],
  visibilityFilter: {
    updateRecordId: 3
  }
};
const initialValues = {
  id: 1,
  name: "The Alchemist",
  author: "Paulo Cohelo",
  description: "A philosophical book regarding life journey",
  category: "fiction",
  content: "Some book content",
  isBookmarked: false
};
const mockStore = configureStore();
const mockSubmitfn = jest.fn();
let store, component, container;

describe("<EditBook />", () => {
  beforeEach(() => {
    component = shallow(
      <EditBook
        initialValues={initialValues}
        updateBook={mockSubmitfn}
        store={store}
      />
    );
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find("ErrorBoundary");
    expect(wrapper.length).toBe(1);
  });
});

describe("<ConnectedEditBook />", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedEditBook
          initialValues={initialValues}
          updateBook={mockSubmitfn}
        />
      </Provider>
    );
  });

  it("+++ render the connected component", () => {
    expect(container).toMatchSnapshot();
    expect(container.length).toEqual(1);
  });
});
