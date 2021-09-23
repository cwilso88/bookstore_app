import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class Modal extends React.Component {
    constructor() {
      super();
      this.state = ''
    }

    render() {
    return (
      <section id="modal" className={this.props.globalState.popupOpen === true ? 'active' : ''}>
        <div className="modal-container">
          <div className="close-btn">
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="modal-grid">
            <div className="images">
              <div
                className="cover"
                style={{
                  backgroundImage:
                    "url(https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="info">
              <h2>Title</h2>
              <div className="info-line">
                <span className="bold">Author:</span>
                Robert C. Martin
              </div>
              <div className="info-line">
                <span className="bold">Category:</span>
                Information Technology
              </div>
              <div className="info-line">
                <span className="bold">Published:</span>
                2008
              </div>
              <p className="description">
                Even bad code can function. But if code isn't clean, it can
                bring a development organization to its knees. Every year,
                countless hours and significant resources are lost because of
                poorly written code. ...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return state
};

export default connect(mapStateToProps, 
  {}
  )(Modal);