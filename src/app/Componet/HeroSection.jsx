export default function HeroSection() {
  return (
    <div>
      {/* Use a regular div for the background image */}
      <section className="container-fluid HERO-SECTION-HOME">
        <div className="container text-light">
          <div className="row py-5 justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className="py-lg-5 py-md-3 py-sm-1 ">
                <h1>
                  Find Your <span> Place </span> Of Dream
                </h1>
                <div className="my-3">
                  We are recognized for exceeding client exdivectations and
                  delivering great results through dedication and ease of
                  process.{" "}
                </div>

                <div className="my-2">
                  <span>LEARN MORE - </span>
                </div>

                <div className="row py-2 my-2 NNUMBER">
                  <div className="col my-3 justify-content-center  ">
                    <h2 className="text-nowarp">280 +</h2>
                    <p>Awards</p>
                  </div>
                  <div className="col my-3 justify-content-center ">
                    <h2 className="text-nowarp">3000 +</h2>
                    <p>Properties</p>
                  </div>
                  <div className="col my-3 justify-content-center ">
                    <h2 className="text-nowarp">10 +</h2>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 justify-content-center align-items-center ">
              <div className="p-3 HERO-SECTION-FROM ">
                <div className="mb-3">
                  <label className="mb-1">Location</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter an address, State, City or Zip Code"
                  />
                </div>

                <label className="mb-1">Property Category</label>
                <div className="dropdown">
            
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Category"
                  />
                </div>

                <button type="button"className="my-3 btn w-100 SEARCH-BUTTON"><i className="bi bi-search"></i>search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
