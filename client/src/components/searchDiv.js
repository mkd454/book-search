import React from "react";

const styles = {
  boop: {
    backgroundColor: "darkgrey",
    padding: "1em"
  }
}

function SearchDiv(props) {
  return (
    <div style={styles.boop}>
      <h3>Book Search</h3>
      <form>
        <div className="form-group">
          <label for="bookInput">Book</label>
          <input 
            type="text" 
            className="form-control" 
            id="bookInput" 
            placeholder="Ex. Harry Potter"
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
          />
        </div>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}

export default SearchDiv;