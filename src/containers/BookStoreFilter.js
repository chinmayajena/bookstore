import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search } from "actions/actionCreators.js";

class BookStoreFilter extends Component {
  render() {
    const { search, value } = this.props;

    return (
      <input
        className="form-control"
        placeholder="Search ..."
        onChange={e => search(e.target.value)}
        value={value}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    recordFilter: state.visibilityFilter.filter
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookStoreFilter);
