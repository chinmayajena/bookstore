import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedBookStoreFilter, {
  BookStoreFilter
} from "./BookStoreFilter.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

let storeSettings = {
  text: "",
  sortBy: "name",
  sortOrder: "asc",
  updateRecordId: undefined
};
const mockSearchfn = jest.fn();
const mockSortByfn = jest.fn();
const mockSortOrderfn = jest.fn();

describe("<BookStoreFilter />", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <BookStoreFilter
        bookStoreSettings={storeSettings}
        search={mockSearchfn}
        value=""
        sortBy={mockSortByfn}
        sortOrder={mockSortOrderfn}
      />
    );
  });

  it("renders the component", () => {
    expect(component.debug()).toMatchSnapshot();
    const wrapper = component.find("ErrorBoundary");
    expect(wrapper.length).toBe(1);
  });

  it("sortBy is called when dropdwon value changes", () => {
    component.find("select").simulate("change", {
      target: "author"
    });
    expect(mockSortByfn.mock.calls.length).toBe(1);
  });

  it("search is called when input value changes", () => {
    component.find("#search-input").simulate("change", {
      target: "paulo"
    });
    expect(mockSearchfn.mock.calls.length).toBe(1);
  });

  it("sortOrder is called when button clicked", () => {
    component.find("#sort-order-btn").simulate("click");
    expect(mockSortOrderfn.mock.calls.length).toBe(1);
  });
});

describe("<ConnectedBookStoreFilter />", () => {
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(storeSettings);
    container = mount(
      <Provider store={store}>
        <ConnectedBookStoreFilter
          bookStoreSettings={storeSettings}
          search={mockSearchfn}
          value=""
          sortBy={mockSortByfn}
          sortOrder={mockSortOrderfn}
        />
      </Provider>
    );
  });

  it("+++ render the connected component", () => {
    expect(container).toMatchSnapshot();
    expect(container.length).toEqual(1);
  });
});
