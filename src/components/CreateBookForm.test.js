import React from "react";
import { shallow } from "enzyme";
import { CreateBook } from "./CreateBookForm";
import configureStore from "redux-mock-store";

describe("<CreateBookForm />", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, component;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<CreateBook store={store} />);
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find(".form");
    expect(wrapper.length).toBe(1);
  });
});
