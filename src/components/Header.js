import React from "react";

const styles = {
  headerStyle: {
    background: "#445c6b",
    borderBottom: "10px solid #70B096",
    color: "white"
  },
  h1Style: {
    fontWeight: 800
  }
};

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid" style={styles.headerStyle}>
      <div className="container text-center">
        <h1 style={styles.h1Style} className="display-4">
          Employee Directory
        </h1>
        <p className="lead">
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </p>
      </div>
    </div>
  );
}

export default Header;
