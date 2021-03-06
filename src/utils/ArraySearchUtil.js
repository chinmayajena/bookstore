export const getVisibleBooks = (books, filter) => {
  if (filter === "") return books;
  return books.filter(
    book =>
      Object.values(book).filter(eachString => {
        return (
          eachString
            .toString()
            .toUpperCase()
            .indexOf(filter.toUpperCase()) != -1
        );
      }).length > 0
  );
};

export const compareValues = (key, order = "asc") => {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order == "desc" ? comparison * -1 : comparison;
  };
};

export const getBookList = (books, filter, sortBy, sortOrder = "asc") => {
  let filteredBooks = getVisibleBooks(books, filter);
  return [...filteredBooks.sort(compareValues(sortBy, sortOrder))];
};
