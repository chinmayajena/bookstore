import React from "react";
import { reduxForm, Field } from "redux-form";

let CreateBookForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <div className="control">
          <Field
            name="name"
            component={renderField}
            type="text"
            label="Book Name"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="control">
          <Field
            name="author"
            component={renderField}
            type="text"
            label="Author Name"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="control">
          <Field
            name="description"
            component={renderField}
            type="text"
            label="Description"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="control">
          <label className="label">Category</label>
          <div className="select">
            <Field className="form-control" name="category" component="select">
              <option />
              <option value="fiction">fiction</option>
              <option value="non-fiction">non-fiction</option>
              <option value="Drama">Drama</option>
            </Field>
          </div>
        </div>
      </div>

      <div className="form-check">
        <div className="control">
          <label className="form-check-label">
            <Field
              name="isBookmarked"
              id="bookmarkbook"
              component="input"
              type="checkbox"
              className="form-check-input"
            />
            Bookmark ?
          </label>
        </div>
      </div>

      <div className="form-group">
        <div className="control">
          <label className="label">Content</label>
          <Field className="form-control" name="content" component="textarea" />
        </div>
      </div>

      <div className="form-group">
        <div className="control">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const validate = val => {
  const errors = {};
  if (!val.bookName) {
    console.log("Book Name is required");
    errors.bookName = "Required";
  }
  if (!val.authorName) {
    console.log("Author Name is required");
    errors.authorName = "Required";
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input
        className="form-control"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default (CreateBookForm = reduxForm({
  form: "createBook",
  validate
})(CreateBookForm));