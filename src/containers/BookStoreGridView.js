import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteBook, updateBookProgress } from "actions/actionCreators.js";

class BookStoreGridView extends Component {
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

  render() {
    let count = 1;
    const elements = this.props.books.map(element => {
      return (
        <div className="col-md-4" key={element.id}>
          {" "}
          <div className="mt-3 pt-5 card">
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
              <div className="card-footer">
                <button
                  onClick={() => this.editBook(element.id)}
                  className="btn btn-success btn-sm"
                >
                  <i className="fa fa-edit" aria-hidden="true" />
                </button>
                <button
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
      <div>
        {this.props.books && this.props.books.length !== 0 ? (
          <div className="row">{elements}</div>
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
    books: state.books,
    recordFilter: state.recordFilter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteBook,
      updateBookProgress
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookStoreGridView);
