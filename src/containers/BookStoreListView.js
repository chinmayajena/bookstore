import React, { Component } from "react";
import { connect } from "react-redux";
import { getBookList } from "utils/ArraySearchUtil.js";
class BookStoreListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.books && this.props.books.length !== 0 ? (
          <table className="table" id="book-store-table">
            <thead className="thead-dark">
              <tr>
                <th>Book Name</th>
                <th>Author</th>
                <th>Description</th>
                <th>Category</th>
                <th>Content</th>
                <th>Bookmarked</th>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map(book => (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>{book.category}</td>
                  <td>{book.content}</td>
                  <td className="bookmark-column">
                    {book.isBookmarked ? (
                      <i className="fas fa-star" />
                    ) : (
                      <i className="far fa-star" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ marginTop: "50px" }} className="col-xs-12 offset-lg-1">
            <div className="alert alert-danger" role="alert">
              Book List is empty or Filter results show no results
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: getBookList(
      state.books,
      state.visibilityFilter.text,
      state.visibilityFilter.sortBy
    )
  };
};

export default connect(
  mapStateToProps,
  null
)(BookStoreListView);
