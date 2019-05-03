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

function SavedDisplayDiv() {
  return (
    <div style={styles.boop}>
      <container>
        <div className="row">
          <div className="col-6">
            <h4>Harry Potter's Bookshelf</h4>
            <p>The Great Book a behind the Hogwats Adventures</p>
            <p style={styles.boop4}>Written By John Granger</p>
          </div>
          <div className="col-6" style={styles.boop2}>
            <button type="button" style={styles.boop3} className="btn btn-danger">View</button>
            <button type="button" style={styles.boop3} className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img src="https://via.placeholder.com/250/09f/fff.png" alt="" />
          </div>
          <div className="col-9">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo velit eu nibh pretium, vel molestie nulla molestie. Vivamus laoreet malesuada lectus, id sodales urna tincidunt id. Morbi aliquet, risus et sollicitudin suscipit, ipsum ex porttitor ligula, vitae pellentesque turpis arcu ut quam. Nullam vel ultricies nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ut vulputate tortor. Donec erat dui, laoreet in magna sit amet, fringilla maximus odio. In non commodo ligula. Mauris facilisis urna a leo ultricies, vitae fringilla lectus pellentesque. Nulla consectetur, mi sed aliquet pellentesque, odio leo scelerisque ligula, ac semper diam arcu quis ex. Aliquam neque nisl, cursus non scelerisque ac, laoreet vel neque. Aliquam posuere neque eu leo bibendum, eu euismod lorem molestie. Curabitur eget vehicula mauris, ut dictum ante. Morbi nec velit vehicula, tempus mi in, interdum neque.</p>
          </div>
        </div>
      </container>
      
    </div>
  )
}

export default SavedDisplayDiv;