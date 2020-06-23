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
    results: [],
    resultsTotal: []
  };

  componentDidMount() {
    this.getEmployeeInfo();
  }

  // Call API to get employee info
  getEmployeeInfo = () => {
    API.getUsers()
      .then((res) => {
        console.log("API CALL", res);
        this.setState({
          results: res.data.results,
          resultsTotal: res.data.results
        });
      })
      .catch((err) => console.log(err));
  };

  // Upon change to the search form, filter resultsTotal and pass it to results
  handleNameSearchFilter = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    this.setState({
      [name]: value,
      results: this.state.resultsTotal.filter(
        (elem) =>
          (
            elem.name.first.toLowerCase() +
            " " +
            elem.name.last.toLowerCase()
          ).indexOf(value.toLowerCase()) !== -1
      )
    });
  };

  // Upon click of "Name" header, sort in alphabetical order
  handleNameSort = (event) => {
    function compare(a, b) {
      const nameA = a.name.first.toLowerCase();
      const nameB = b.name.first.toLowerCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    this.setState({ results: this.state.resultsTotal.sort(compare) });
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
              <th id="nameSort" onClick={this.handleNameSort}>
                Name
              </th>
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
