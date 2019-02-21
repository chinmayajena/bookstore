import React from "react";
import { shallow } from "enzyme";
import { AddBook } from "./AddBook.js";
import configureStore from "redux-mock-store";

describe("<AddBook />", () => {
  const initialState = {};
  const mockStore = configureStore();
  const mockSubmitfn = jest.fn();
  let store, component;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<AddBook addBook={mockSubmitfn} store={store} />);
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find("ErrorBoundary");
    expect(wrapper.length).toBe(1);
  });
});
