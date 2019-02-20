export const getVisibleBooks = (books, filter) => {
  if (filter === "") return books;
  return books.filter(
    book =>
      Object.values(book).filter(eachString => {
        console.log(eachString.toString());
        return (
          eachString
            .toString()
            .toUpperCase()
            .indexOf(filter.toUpperCase()) != -1
        );
      }).length > 0
  );
};
