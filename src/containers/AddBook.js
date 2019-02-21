import React, { Component } from "react";
import CreateBookForm from "components/CreateBookForm.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBook } from "actions/actionCreators.js";
import { bindActionCreators } from "redux";
import ErrorBoundary from "components/ErrorBoundary.js";

export class AddBook extends Component {
  handleFormSubmit = values => {
    const { addBook } = this.props;
    addBook(values);
    this.props.history.push("/");
  };

  render() {
    return (
      <ErrorBoundary>
        <CreateBookForm onSubmit={this.handleFormSubmit} />
      </ErrorBoundary>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addBook
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AddBook);
