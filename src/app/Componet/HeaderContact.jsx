import React from 'react'

const HeaderContact = () => {
    return (
        <div>
            <section className="container-fluid  HEADER-CONTACT"> 
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-4 col-sm-12 d-flex justify-content-center justify-content-md-start align-items-center">
                            <i className="bi bi-facebook m-1"></i>
                            <i className="bi bi-instagram m-1"></i>
                            <i className="bi bi-linkedin m-1"></i>
                            <i className="bi bi-twitter m-1"></i>
                        </div>

                        <div
                            className="col-md-8 col-sm-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center">
                            <span className="text-nowrap m-1">
                                <i className="bi bi-telephone-fill m-1"></i> Call Us: (+1) 985625741
                            </span>
                            <span className="text-nowrap m-1">
                                <i className="bi bi-envelope-fill m-1"></i> Email: info@web.com
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeaderContact