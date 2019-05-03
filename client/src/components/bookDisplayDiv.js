import React from "react";

const styles = {
  boop: {
    backgroundColor: "lightyellow",
    padding: "1em",
    marginTop: "1em"
  },
  boop2: {
    textAlign: "right"
  },
  boop3: {
    marginRight: 5
  },
  boop4: {
    fontSize: 12
  }
}

function BookDisplayDiv(props) {
  let books = props.results
  return (
    <div style={styles.boop}>
      {books.map((book) => {
        return (
          <container>
            <div className="row">
              <div className="col-9">
                <h4>{book.volumeInfo.title}</h4>
                <p style={styles.boop4}>Written By {book.volumeInfo.authors.join(", ")}</p>
              </div>
              <div className="col-3" style={styles.boop2}>
                <a href={book.volumeInfo.infoLink === undefined
                  ? ""
                  : `${book.volumeInfo.infoLink}`} target="_blank">
                  <button type="button" style={styles.boop3} className="btn btn-danger">View</button>
                </a>
                <button type="button" style={styles.boop3} className="btn btn-danger">Save</button>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src={book.volumeInfo.imageLinks === undefined
                  ? "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                  : `${book.volumeInfo.imageLinks.thumbnail}`} alt="book cover" />
              </div>
              <div className="col-10">
                <p>{book.volumeInfo.description}</p>
              </div>
            </div>
          </container>
        )
      })}
    </div>
  )
}

export default BookDisplayDiv;