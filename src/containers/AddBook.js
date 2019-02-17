import React, { Component } from "react";
import CreateBookForm from "./CreateBookForm.js";
import { connect } from "react-redux";
import { addBook } from "actions/actionCreators.js";
import { bindActionCreators } from "redux";

class AddBook extends Component {
  handleFormSubmit = values => {
    const { addBook } = this.props;
    addBook(values);
    this.props.history.push("/");
  };

  render() {
    return <CreateBookForm onSubmit={this.handleFormSubmit} />;
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
