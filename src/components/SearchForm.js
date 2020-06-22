import React from "react";

const style = {
  formStyle: {
    width: "250px",
    margin: "auto"
  }
};

function SearchForm(props) {
  return (
    <form style={style.formStyle}>
      <div className="form-group">
        <input
          onChange={props.handleNameSearchFilter}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by Name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
