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

export class BookStoreGridView extends Component {
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
    let count = 1;

    const elements = this.props.books.map(element => {
      return (
        <div className="col-md-3" key={element.id}>
          {" "}
          <div className="mt-3 pt-5 card shadow">
            <div className="card-body">
              <h4 className="card-title">{element.name}</h4>
              <p className="card-text">
                <b>Author:</b>
                {element.author}
              </p>
              <p className="card-text">
                <b>Category:</b>
                {element.category}
              </p>
              <p className="card-text">
                <b>Description:</b>
                {element.description}
              </p>
              <div className="card-footer">
                <button
                  id={`edit-btn-gridview-${element.id}`}
                  onClick={() => this.editBook(element.id)}
                  className="btn btn-success btn-sm"
                >
                  <i className="fa fa-edit" aria-hidden="true" />
                </button>
                <button
                  id={`bookmark-btn-gridview-${element.id}`}
                  onClick={() => this.starBook(element.id)}
                  className="btn btn-warning btn-sm"
                >
                  {element.isBookmarked && <i className="fas fa-star" />}
                  {!element.isBookmarked && <i className="far fa-star" />}
                </button>
                <button
                  id={`delete-btn-gridview-${element.id}`}
                  onClick={() => this.removeBook(element.id)}
                  className="btn btn-danger float-right btn-sm"
                >
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>{" "}
              </div>
            </div>
          </div>{" "}
        </div>
      );
    });
    return (
      <ErrorBoundary>
        <div>
          {this.props.books && this.props.books.length !== 0 ? (
            <div className="row p6 mt4">{elements}</div>
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
)(BookStoreGridView);
