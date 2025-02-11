"use client";


const page = () => {
  return (
    <div className="CONTACT">
      {/* <!--CONTACT-HERO-SECTION --> */}
      <section className="container-fluid  CONTACT-HERO-SECTION ">
        <div className="container ">
          <div className="row ">
            <div className="col-12  p-5 text-center text-light">
              <h2 className="pt-5 my-2">Contact us </h2>
              <h6  className="my-2">
                Home / Contact Us
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- contact  --> */}
      <section className="container-fluid">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="m-2">
                <h6>CONTACT US</h6>
                <h2>Get In Touch</h2>
                <div>
                  <p>
                    Rem atque earum sed possimus eaque quae magnam. Unde sunt et
                    et cumque ipsa. Eos soluta voluptatibus quas sapiente eum.
                    Quibusdam quos rerum Blanditiis rerum maxime
                  </p>
                </div>
                <div className="CONTACT_TUCH">
                  <div className="d-flex align-items-center">
                    <div className="m-1 p-2">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      2839 Old Dear Lane New York, NY 10013 United States
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="m-1 p-2">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>+ (0712) 819 79 555</div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="m-1 p-2">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>info@havnor.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 justify-content-center align-items-center">
              <div className="m-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4078667405274!2d72.50516137417912!3d23.045503879157657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1737966471229!5m2!1sen!2sin"
                  width="100%"
                  height="350px"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="text-center">
              <h6>CONTACT US</h6>
              <h2>Send A Message</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Subject"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "200px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Write Your Message Here....</label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="text-center">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
