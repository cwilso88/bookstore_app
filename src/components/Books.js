import React from "react";
import { connect } from 'react-redux';
import { openingInfoBook } from '../actions/allActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from '@fortawesome/free-regular-svg-icons'

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "cha",
    };
  }

  showAllBooks = () => {
    return this.props.booksData.map((book) => {
      return (
        <div className="book-container">
          <div
            key={book.id}
            className="book"
            onClick={this.props.openingInfoBook.bind(null, book)}
            style={{
              backgroundImage: `url(${book.coverURL})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="open-list" style={{ background: "white" }}>
          <FontAwesomeIcon className="open-list-icon" icon={faListAlt} />
        </div>
        <section id="allBooks">
             {this.showAllBooks()}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
     console.log(state);
  return state
 
};

export default connect(mapStateToProps, 
     {
          openingInfoBook
     }
     )(Books);