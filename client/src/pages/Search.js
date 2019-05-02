import React from "react";
import Wrapper from "../components/Wrapper/index";
import SearchDiv from "../components/searchDiv";
import Jumbotron from "../components/jumbotron";
import BookDisplayDiv from "../components/bookDisplayDiv";

const styles = {
  boop: {
    backgroundColor: "lightblue",
    padding: "1em",
    marginTop: "1em"
  }
}

class Search extends React.Component {


  render() {

    return (
      <Wrapper>
        <Jumbotron />
        <SearchDiv />
        <div style={styles.boop}>
          <h4>Results</h4>
          <BookDisplayDiv />
        </div>
      </Wrapper>
    )
  }
}

export default Search;