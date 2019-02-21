import React, { Component } from "react";
import CreateBookForm from "components/CreateBookForm.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateBook } from "actions/actionCreators.js";
import { bindActionCreators } from "redux";
import ErrorBoundary from "components/ErrorBoundary.js";

class EditBook extends Component {
  handleFormSubmit = values => {
    const { updateBook } = this.props;
    updateBook(values);
    this.props.history.push("/");
  };

  render() {
    return (
      <ErrorBoundary>
        <CreateBookForm
          initialValues={this.props.initialValues}
          onSubmit={this.handleFormSubmit}
        />
      </ErrorBoundary>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateBook
    },
    dispatch
  );
};

const getRecordForUpdate = (booksArray, recordId = 1) => {
  let records = booksArray.filter(book => book.id === recordId);
  return records.length > 0 ? records[0] : {};
};

export default connect(
  state => ({
    initialValues: getRecordForUpdate(
      state.books,
      state.visibilityFilter.updateRecordId
    )
  }),
  mapDispatchToProps
)(EditBook);
