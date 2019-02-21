import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search, sortBy, sortOrder } from "actions/actionCreators.js";
import ErrorBoundary from "components/ErrorBoundary.js";

class BookStoreFilter extends Component {
  render() {
    const { bookStoreSettings, search, value, sortBy, sortOrder } = this.props;

    return (
      <ErrorBoundary>
        <select
          id="sort-select"
          className="form-control"
          onChange={e => sortBy(e.target.value)}
        >
          <option value="name">Select Sort By...</option>
          <option value="name">Book Name</option>
          <option value="author">Author</option>
          <option value="isBookmarked">Star</option>
        </select>
        <button
          id="sort-order-btn"
          type="button"
          className="btn btn-sm btn-info"
          onClick={e => sortOrder("change")}
        >
          {bookStoreSettings.sortOrder}
        </button>
        <input
          id="search-input"
          className="form-control"
          placeholder="Search ..."
          onChange={e => search(e.target.value)}
          value={value}
        />
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookStoreSettings: state.visibilityFilter
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search, sortBy, sortOrder }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookStoreFilter);
