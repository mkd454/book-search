import React from "react";
import Wrapper from "../components/Wrapper/index";
import SearchDiv from "../components/searchDiv";
import Jumbotron from "../components/jumbotron";
import BookDisplayDiv from "../components/bookDisplayDiv";
import API from "../utils/API";

const styles = {
  boop: {
    backgroundColor: "lightblue",
    padding: "1em",
    marginTop: "1em"
  }
}

class Search extends React.Component {
  state = {
    search: "",
    results: []
  }

  componentDidMount() {
    this.searchGoogle("Harry Potter");
  }

  searchGoogle = query => {
    API.search(query)
    .then(res => this.setState({ results: res.data.items }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogle(this.state.search);
  };

  render() {
    console.log(this.state.results);
    console.log(this.state.search);
    return (
      <Wrapper>
        <Jumbotron />
        <SearchDiv 
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div style={styles.boop}>
          <h4>Results</h4>
          <BookDisplayDiv 
            results={this.state.results}
          />
        </div>
      </Wrapper>
    )
  }
}

export default Search;