import React, { Component } from "react";
import { connect } from "react-redux";
import { SHOW_ALL } from "actions/actionTypes";

class BookStoreListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.books && this.props.books.length !== 0 ? (
          <table className="table table-dark">
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>{book.category}</td>
                  <td>{book.content}</td>
                  <td>{book.isBookmarked.toString()}</td>
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

const getVisibleBooks = (books, filter) => {
  return books;
  /* switch (filter) {
    case SHOW_ALL:
      return books;
    default:
      throw new Error("Unknown filter: " + filter);
  } */
};

const mapStateToProps = state => {
  return {
    books: state.books,
    recordFilter: state.recordFilter
  };
};

export default connect(
  mapStateToProps,
  null
)(BookStoreListView);
