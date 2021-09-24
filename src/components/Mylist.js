import React from "react";
import { connect } from 'react-redux';
import { closingMyList } from "../actions/allActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

class Mylist extends React.Component {
    showListOfBooks = () => {
        return this.props.globalState.myList.map((book) => {
            return(
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span> {book} <span className="delete-btn">Delete</span></li>
            )
        })
    }

    render() {
    return (
        <section id="myList" className={this.props.globalState.listOpen === true ? 'active' : ''}>
            <h3>My List of Books</h3>
            <hr className="line" />
            <ul>
               {this.showListOfBooks()}
            </ul>
            <div onClick={this.props.closingMyList} className="close-list">Close List</div>
        </section>
    )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state
  };
  
  export default connect(mapStateToProps, 
    {
      closingMyList
    }
    )(Mylist);