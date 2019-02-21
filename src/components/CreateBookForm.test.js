import React from "react";
import { shallow } from "enzyme";
import { CreateBook, validate, renderField } from "./CreateBookForm";
import configureStore from "redux-mock-store";

describe("<CreateBookForm />", () => {
  const initialState = {};
  const mockStore = configureStore();
  const mockSubmitfn = jest.fn();
  let store, component;
  let submitting, touched, error, reset, onSave, handleSubmit, warning;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(
      <CreateBook handleSubmit={mockSubmitfn} store={store} />
    );
    submitting = false;
    touched = false;
    error = null;
    warning = null;
    handleSubmit = fn => fn;
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find(".form");
    expect(wrapper.length).toBe(1);
  });

  it("renderField returns the correct field", () => {
    expect(
      renderField({
        input: "TestData",
        label: "Test Label",
        type: "text",
        meta: { touched, error, warning }
      })
    ).toMatchSnapshot();
  });

  it("should call the mock submit function", () => {
    component.find(".form").simulate("submit", { preventDefault() {} });
    expect(mockSubmitfn.mock.calls.length).toBe(1);
  });

  it("should validate the form values", () => {
    expect(validate({})).toEqual({
      authorName: "Required",
      bookName: "Required"
    });
  });
});
