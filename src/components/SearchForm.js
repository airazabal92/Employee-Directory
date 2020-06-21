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
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
