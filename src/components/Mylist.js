import react from "react";

const Mylist = () => {
    return (
        <section id="myList">
            <h3>My List of Books</h3>
            <hr />
            <ul>
                <li>Clean Code<span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li>Clean Code<span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li>Clean Code<span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li>Clean Code<span className="delete-btn">Delete</span></li>
            </ul>
            <ul>
                <li>Clean Code<span className="delete-btn">Delete</span></li>
            </ul>
            <div className="close-list">Close List</div>
        </section>
    )
}

export default Mylist;