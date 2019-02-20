import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search, sortBy } from "actions/actionCreators.js";

class BookStoreFilter extends Component {
  render() {
    const { search, value, sortBy } = this.props;

    return (
      <div>
        <select
          id="sort-select"
          className="form-control"
          onChange={e => sortBy(e.target.value)}
        >
          <option value="name">Book Name</option>
          <option value="author">Author</option>
        </select>

        <input
          id="search-input"
          className="form-control"
          placeholder="Search ..."
          onChange={e => search(e.target.value)}
          value={value}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookStoreSettings: state.visibilityFilter
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search, sortBy }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookStoreFilter);
