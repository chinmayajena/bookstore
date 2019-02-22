import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedAddBook, { AddBook } from "./AddBook.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("<AddBook />", () => {
  let component;
  const addBookfn = jest.fn();
  let appHistory = [];
  beforeEach(() => {
    component = shallow(<AddBook addBook={addBookfn} history={appHistory} />);
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find("ErrorBoundary");
    expect(wrapper.length).toBe(1);
  });

  it("submits the form", () => {
    component.find("ReduxForm").simulate("submit", { preventDefault() {} });
    expect(addBookfn.mock.calls.length).toBe(1);
  });
});

describe("<ConnectedAddBook />", () => {
  const initialState = {};
  const mockStore = configureStore();
  const addBookfn = jest.fn();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedAddBook addBook={addBookfn} />
      </Provider>
    );
  });

  it("+++ render the connected component", () => {
    expect(container).toMatchSnapshot();
    expect(container.length).toEqual(1);
  });
});
