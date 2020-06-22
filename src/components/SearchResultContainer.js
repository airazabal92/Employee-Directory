import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

// Styling for table
const style = {
  tableStyle: {
    width: "85%",
    margin: "auto"
  }
};

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.getEmployeeInfo();
  }

  getEmployeeInfo = () => {
    API.getUsers()
      .then((res) => {
        console.log("API CALL", res);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleNameSearchFilter = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleNameSearchFilter={this.handleNameSearchFilter}
        />
        <br></br>
        <table className="table table-striped" style={style.tableStyle}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <EmployeeList results={this.state.results} />
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
