import React from "react";
import { shallow } from "enzyme";
import CreateBookForm from "./CreateBookForm";

describe("<CreateBookForm />", () => {
  it("renders the component", () => {
    const component = shallow(<CreateBookForm />);
    expect(component.debug()).toMatchSnapshot();
    /* const wrapper = component.find(".App");
    expect(wrapper.length).toBe(1); */
  });
});
