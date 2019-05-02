import React from "react";

const styles = {
  boop: {
    backgroundColor: "darkgrey",
    padding: "1em"
  }
}

function SearchDiv() {
  return (
    <div style={styles.boop}>
      <h3>Book Search</h3>
      <form>
        <div className="form-group">
          <label for="bookInput">Book</label>
          <input type="text" className="form-control" id="bookInput" placeholder="Ex. Harry Potter" />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}

export default SearchDiv;