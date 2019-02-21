import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBookList } from "utils/ArraySearchUtil.js";
import ErrorBoundary from "components/ErrorBoundary.js";
import {
  deleteBook,
  updateBookProgress,
  bookmarkBook
} from "actions/actionCreators.js";
class BookStoreListView extends Component {
  constructor(props) {
    super(props);
  }

  removeBook = id => {
    const { deleteBook } = this.props;
    deleteBook(id);
  };

  editBook = id => {
    const { updateBookProgress } = this.props;
    updateBookProgress(id);
    this.props.history.push("/editbook");
  };

  starBook = id => {
    const { bookmarkBook } = this.props;
    bookmarkBook(id);
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="row">
          <div className="col-md-10 offset-md-1">
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
                    <th>Actions</th>
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
                      <td>
                        <button
                          onClick={() => this.editBook(book.id)}
                          className="btn btn-success btn-sm"
                        >
                          <i className="fa fa-edit" aria-hidden="true" />
                        </button>
                        <button
                          onClick={() => this.starBook(book.id)}
                          className="btn btn-warning btn-sm"
                        >
                          {book.isBookmarked && <i className="fas fa-star" />}
                          {!book.isBookmarked && <i className="far fa-star" />}
                        </button>
                        <button
                          onClick={() => this.removeBook(book.id)}
                          className="btn btn-danger btn-sm"
                        >
                          <i className="fa fa-trash" aria-hidden="true" />
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div
                style={{ marginTop: "50px" }}
                className="col-xs-12 offset-lg-1"
              >
                <div className="alert alert-danger" role="alert">
                  Book List is empty or Filter results show no results
                </div>
              </div>
            )}{" "}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: getBookList(
      state.books,
      state.visibilityFilter.text,
      state.visibilityFilter.sortBy,
      state.visibilityFilter.sortOrder
    )
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteBook,
      bookmarkBook,
      updateBookProgress
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookStoreListView);
