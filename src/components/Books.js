import React from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from '@fortawesome/free-regular-svg-icons'

class Books extends React.Component {
  constructor() {
       super();
       this.state = {
            name: 'cha'
       }
  }

  render() {
    return (
      <div className="container">
        <div className="open-list" style={{ background: "white" }}>
          <FontAwesomeIcon className="open-list-icon" icon={faListAlt} />
        </div>
        <section id="allBooks">
          <div className="book-container">
            <div
              className="book"
              style={{
                backgroundImage:
                  "url(https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
          <div className="book-container">
            <div className="book"></div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Books);