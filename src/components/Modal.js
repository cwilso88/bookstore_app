import react from 'react'


const Modal = () => {
    return(
        <section id="modal" className="active">
            <div className="modal-grid">
                <div className="images">
                    <div className="cover">
                        cover image
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
                            2017
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal;