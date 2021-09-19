import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Mylist = () => {
    return (
        <section id="myList" className="">
            <h3>My List of Books</h3>
            <hr />
            <ul>
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span>Clean Code <span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span>Clean Code <span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span>Clean Code <span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span>Clean Code <span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span>Clean Code <span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li><span className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></span>Clean Code <span className="delete-btn">Delete</span></li>
            </ul>
            
            <div className="close-list">Close List</div>
        </section>
    )
}

export default Mylist;