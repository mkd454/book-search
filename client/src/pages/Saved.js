import React from "react";
import Wrapper from "../components/Wrapper/index";
import Jumbotron from "../components/jumbotron";
import SavedDisplayDiv from "../components/savedDisplayDiv";

const styles = {
  boop: {
    backgroundColor: "lightblue",
    padding: "1em",
    marginTop: "1em"
  }
}

function Saved() {
  return (
    <Wrapper>
      <Jumbotron />
      <div style={styles.boop}>
        <h4>Saved Books</h4>
        <SavedDisplayDiv />
      </div>
    </Wrapper>
  )
}

export default Saved;