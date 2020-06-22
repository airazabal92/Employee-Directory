import React from "react";

function EmployeeList(props) {
  console.log("props", props);

  // Format the date to month-day-year
  props.results.forEach(function (employee) {
    const year = employee.dob.date.substring(0, 4);
    const month = employee.dob.date.substring(5, 7);
    const day = employee.dob.date.substring(8, 10);

    employee.formattedDOB = month + "-" + day + "-" + year;
  });

  //   props.results.forEach(function (item) {
  //     console.log(item);
  //   });

  return (
    <tbody>
      {props.results.map((result) => (
        <tr key={result.id}>
          <td>
            <img src={result.picture.medium} alt="Employee" />
          </td>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.cell}</td>
          <td>
            <a href={`mailto:{${result.email}}`}>{result.email}</a>
          </td>
          <td>{result.formattedDOB}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default EmployeeList;
