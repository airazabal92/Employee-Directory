import React from "react";

const styles = {
  headerStyle: {
    background: "#4F0B27",
    borderBottom: "10px solid #70B096",
    color: "white"
  },
  h1Style: {
    fontWeight: 800
  }
};

function Header() {
  return (
    <div class="jumbotron jumbotron-fluid" style={styles.headerStyle}>
      <div class="container text-center">
        <h1 style={styles.h1Style} class="display-4">
          Employee Directory
        </h1>
        <p class="lead">
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </p>
      </div>
    </div>
  );
}

export default Header;
