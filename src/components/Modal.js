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
                    `url(${this.props.globalState.openInfoBook.coverURL})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="info">
              <h2>{this.props.globalState.openInfoBook.title}</h2>
              <div className="info-line">
                <span className="bold">Author:</span>
                {this.props.globalState.openInfoBook.author}
              </div>
              <div className="info-line">
                <span className="bold">Category:</span>
                {this.props.globalState.openInfoBook.category}
              </div>
              <div className="info-line">
                <span className="bold">Published:</span>
                {this.props.globalState.openInfoBook.published}
              </div>
              <p className="description">
              {this.props.globalState.openInfoBook.description}
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