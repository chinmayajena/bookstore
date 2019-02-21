import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe("<ErrorBoundary />", () => {
  it("renders the component", () => {
    const component = shallow(<ErrorBoundary />);
    expect(component.debug()).toMatchSnapshot();
  });
});
