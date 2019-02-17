import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/actionCreators";
import { bindActionCreators } from "redux";

class BookStoreActionBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            type="button"
            onClick={() =>
              this.setState({
                createBookFormShow: !this.state.createBookFormShow
              })
            }
            style={{ marginTop: "25px", marginRight: "15px" }}
            className="btn btn-danger"
          >
            Add Book
          </button>
        </div>
      </div>
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
)(BookStoreActionBar);
