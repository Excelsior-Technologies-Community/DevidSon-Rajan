import React from "react";
import logo from "../../../public/img/logomain.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <section className="container-fluid FOOTER">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4  col-12">
              <div className="p-lg-3 p-sm-2">
                <div>
                  <Image src={logo} alt="logo" />
                </div>
                <div>
                  <p>
                    Dolor voluptates sunt molestias quia est adipisci. Officiis
                    quae consequuntur nam tempora. Illum est placeat mollitia.
                    Quasi architecto et quaerat doloribus.
                  </p>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center Social-Icon">
                  <i className="bi bi-facebook m-1"></i>
                  <i className="bi bi-instagram m-1"></i>
                  <i className="bi bi-linkedin m-1"></i>
                  <i className="bi bi-twitter m-1"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-2  col-12">
              <div className="p-lg-3 p-sm-2">
                <h6 className="border-bottom border-md-0 border-lg-0 text-lg-start text-center  ">
                  <p>Links</p>
                </h6>

                <div className="d-flex flex-sm-row flex-lg-column justify-content-around">
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Projects</p>
                  <p>Services</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3  col-12">
              <div className="p-lg-3 p-sm-2">
                <h6 className="border-bottom border-md-0 border-lg-0 text-lg-start text-center ">
                  <p> Contact Us</p>
                </h6>
                <div className="d-flex row-gap-2 column-gap-2">
                  <div>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>2839 Old Dear Lane New York, NY 10013 United States</div>
                </div>
                <div className="d-flex row-gap-2 column-gap-2">
                  <div>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>+(0712) 819 79 555</div>
                </div>
                <div className="d-flex row-gap-2 column-gap-2">
                  <div>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>contact@indianingermany.des</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3  col-12">
              <div className="p-lg-3 p-sm-2">
                <h6 className="border-bottom border-md-0 border-lg-0 text-lg-start text-center">
                  <p>Newsletter </p>
                </h6>
                <p>Stay always in touch! Subscribe to our newsletter.</p>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Enter Your Email"
                  />
                  <button type="button" className="my-1 btn FOOTER-SUBMIT">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
