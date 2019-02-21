import filterReducer from "./FilterReducer.js";
import {
  SET_FILTER,
  UPDATE_BOOK_PROGRESS,
  SORT_BY,
  SORT_ORDER
} from "actions/actionTypes";
describe("FilterReducer", () => {
  let filterDefaultState = {
    text: "",
    sortBy: "name",
    sortOrder: "asc",
    updateRecordId: undefined
  };
  it("should handle SET_FILTER", () => {
    expect(
      filterReducer(filterDefaultState, {
        type: SET_FILTER,
        filter: "Paulo"
      })
    ).toEqual({
      sortBy: "name",
      sortOrder: "asc",
      text: "Paulo",
      updateRecordId: undefined
    });
  });

  it("should handle UPDATE_BOOK_PROGRESS", () => {
    expect(
      filterReducer(filterDefaultState, {
        type: UPDATE_BOOK_PROGRESS,
        id: 5
      })
    ).toEqual({
      sortBy: "name",
      sortOrder: "asc",
      text: "",
      updateRecordId: 5
    });
  });

  it("should handle SORT_BY", () => {
    expect(
      filterReducer(filterDefaultState, {
        type: SORT_BY,
        sortType: "author"
      })
    ).toEqual({
      sortBy: "author",
      sortOrder: "asc",
      text: "",
      updateRecordId: undefined
    });
  });

  it("should handle SORT_ORDER", () => {
    expect(
      filterReducer(filterDefaultState, {
        type: SORT_ORDER
      })
    ).toEqual({
      sortBy: "name",
      sortOrder: "desc",
      text: "",
      updateRecordId: undefined
    });
  });
});
