import { getVisibleBooks, compareValues } from "./ArraySearchUtil.js";

describe("ArraySearchUtil", () => {
  const INITIAL_DATA = [
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
      name: "The Deep Horizon",
      author: "Dawn Brown",
      description: "A philosophical book regarding life journey",
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
    }
  ];
  it("Should sort array correctly", () => {
    expect(INITIAL_DATA.sort(compareValues("author"))[0]).toEqual({
      author: "Dawn Brown",
      category: "fiction",
      content: "Some book content",
      description: "A philosophical book regarding life journey",
      id: 2,
      isBookmarked: false,
      name: "The Deep Horizon"
    });
  });

  it("should return searched rows correctly", () => {
    expect(getVisibleBooks(INITIAL_DATA, "rowling")).toEqual([
      {
        id: 3,
        name: "Harry Potter",
        author: "J K Rowling",
        description: "A philosophical book regarding life journey",
        category: "fiction",
        content: "Some book content",
        isBookmarked: true
      }
    ]);
  });
});
