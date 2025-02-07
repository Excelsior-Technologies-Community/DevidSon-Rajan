"use client";

import Image from "next/image";
import AboutImg from "../../../public/img/about.png";

import ResentImg from "../../../public/img/img-2.png";
import ResentImg1 from "../../../public/img/img-3.png";

import g2 from "../../../public/img/g2.png";

import TestmoniceQutesImage from "../../../public/img/qoute.png";

// patner image
import patnerImg1 from "../../../public/img/partner1.png";
import patnerImg2 from "../../../public/img/partner2.png";
import patnerImg3 from "../../../public/img/partner3.png";
import patnerImg4 from "../../../public/img/partner4.png";
import patnerImg5 from "../../../public/img/partner5.png";
import patnerImg6 from "../../../public/img/partner6.png";

import HomeGalleryImag1 from "../../../public/img/img-1.png";
import HomeGalleryImag2 from "../../../public/img/img-2.png";
import HomeGalleryImag3 from "../../../public/img/img-3.png";
import HomeGalleryImag4 from "../../../public/img/img-4.png";




const page = () => {
  return (
    <div className="ABOUT">
      {/* <!--ABOUT-HERO-SECTION --> */}
      <section className="container-fluid  ABOUT-HERO-SECTION ">
        <div className="container ">
          <div className="row ">
            <div className="col-12  p-5 text-center text-light">
              <h2 className="pt-5 my-2">About us </h2>
              <h6 style={{ fontFamily: "Bellefair;" }} className="my-2">
                Home / About Us
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5  ABOUT-US-SECTION ">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
              <div className="p-lg-3 p-2">
                <h6>ABOUT US</h6>

                <p>
                  Let's Get To Know Each Other Rem atque earum sed possimus
                  eaque quae magnam. Unde sunt et et cumque ipsa. Eos soluta
                  voluptatibus quas sapiente eum. Quibusdam quos rerum
                  Blanditiis rerum maxime perspiciatis rerum labore molestiae
                  impedit velit. Sit aut placeat autem quis. Impedit corporis
                  est fugiat voluptas sint et impedit. Quisquam unde harum
                  voluptates quia quam aut numquam illum. Enim nam eum. Ea qui
                  eos ut qui aperiam est sed esse autem. Est non eos accusamus
                  aperiam quod laboriosam. Id modi ullam. Omnis et et vel a
                  nesciunt sunt.
                </p>

                <div className="row py-2 my-2 ABOUT-US-SECTION-NNUMBERS">
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
                    <p className="text-nowarp">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-lg-3 p-2 ">
                <Image src={AboutImg} alt="Home Gallery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5  RECENT-WORK ">
        <div className="container ">
          <div className="row text-center ">
            <h6>RECENT WORK</h6>
            <h2>Exclusive Properties</h2>
          </div>
          <div className="row p-0">
            <div className="col-6 p-0 ">
              <Image src={ResentImg} alt="an" height={300} />
            </div>
            <div className="col-6 p-0">
              <Image src={ResentImg1} alt="an" height={300} />
            </div>
          </div>
        </div>
      </section>


      <section className="container-fluid py-5 ">
        <div className="container ">
          <div className="row py-5 ">
            <div className="col-md-6">
              <div className="p-lg-3 p-2 ">
                <Image src={g2} alt="img" className="w-100" max-height={400} />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div  className="p-lg-3 p-2 ">
                <h2>Our Vision</h2>
                <p>
                  <small>
                    Optio aperiam ullam repellat rerum consequatur. Eveniet a
                    blanditiis explicabo. Ad laboriosam eaque. Quaerat adipisci
                    qui blanditiis delectus eligendi quia officia quibusdam
                    doloribus. Harum atque suscipit iusto est qui explicabo
                    rerum vel. Et ea numquam ipsam animi.Dolor et assumenda
                    earum nisi error nihil hic.
                  </small>
                </p>

                <h2>Our Mission</h2>

                <p>
                  <small>
                    Optio aperiam ullam repellat rerum consequatur. Eveniet a
                    blanditiis explicabo. Ad laboriosam eaque. Quaerat adipisci
                    qui blanditiis delectus eligendi quia officia quibusdam
                    doloribus.Harum atque suscipit iusto est qui explicabo rerum
                    vel. Et ea numquam ipsam animi.Dolor et assumenda earum nisi
                    error nihil hic.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* <!-- TESTIMONIA  --> */}

        <section className="container-fluid  p-0 TESTIMONIA">
        <div
          style={{
            background: "#121d27ed",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "padding-box",
          }}
        >
          <div className="container p-0 ">
            <div className="row  py-5 justify-content-center align-items-center">
              <div className="row text-center my-5 ">
                <h6> TESTIMONIA </h6>
                <h3 className="text-light">In The Words Of Our Clinets</h3>
              </div>

              <div className="row">
                <div className="col-md-4 col-sm-12 p-3 d-flex justify-content-center align-items-center text-center TESTIMONIA-TEXT">
                  <div className="p-3">
                    <div className="p-2 ">
                      <div>
                        <Image
                          src={TestmoniceQutesImage}
                          alt="qutes "
                          height={20}
                        />
                      </div>

                      <p>
                        " Nihil sed corrupti ut est. Neque voluptatibus amet
                        nisi et eaque dolorum reprehenderit. Nihil harum
                        provident id nemo voluptas qui. "
                      </p>

                      <p>-Madisyn Dooley</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 p-3 d-flex justify-content-center align-items-center text-center TESTIMONIA-TEXT">
                  <div className="p-3">
                    <div className="p-2 ">
                      <div>
                        <Image
                          src={TestmoniceQutesImage}
                          alt=""
                          height={20}
                        />
                      </div>

                      <p>
                        " Nihil sed corrupti ut est. Neque voluptatibus amet
                        nisi et eaque dolorum reprehenderit. Nihil harum
                        provident id nemo voluptas qui. "
                      </p>

                      <p>-Madisyn Dooley</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 p-3 d-flex justify-content-center align-items-center text-center TESTIMONIA-TEXT">
                  <div className="p-3">
                    <div className="p-2 ">
                      <div>
                        <Image
                          src={TestmoniceQutesImage}
                          alt="qutes"
                          height={20}
                        />
                      </div>

                      <p>
                        " Nihil sed corrupti ut est. Neque voluptatibus amet
                        nisi et eaque dolorum reprehenderit. Nihil harum
                        provident id nemo voluptas qui. "
                      </p>

                      <p>-Madisyn Dooley</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  PANTNER SECTION */}
      <section className="container-fluid py-5 ">
        <div className="container  PANTNER-SECTION  ">
          <div className="row d-flex align-items-stretch">
            <div className="col-lg-4 col-6 p-0">
              <div className="border border-primary-subtle">
                <Image
                  src={patnerImg1}
                  alt="partner image"
                  className="w-100"
                  height={150}
                />
              </div>
            </div>
            <div className=" col-lg-4 col-6 p-0">
              <div className="border border-primary-subtle">
                <Image
                  src={patnerImg2}
                  alt="partner image"
                  className="w-100"
                  height={150}
                />
              </div>
            </div>
            <div className=" col-lg-4 col-6 p-0">
              <div className="border border-primary-subtle">
                <Image
                  src={patnerImg2}
                  alt="partner image"
                  className="w-100"
                  height={150}
                />
              </div>
            </div>

            <div className=" col-lg-4 col-6 p-0">
              <div className="border border-primary-subtle">
                <Image
                  src={patnerImg4}
                  alt="partner image"
                  className="w-100"
                  height={150}
                />
              </div>
            </div>
            <div className=" col-lg-4 col-6 p-0">
              <div className="border border-primary-subtle">
                <Image
                  src={patnerImg5}
                  alt="partner image"
                  className="w-100"
                  height={150}
                />
              </div>
            </div>
            <div className="col-lg-4 col-6 p-0">
              <div className="border border-primary-subtle">
                <Image
                  src={patnerImg6}
                  alt="partner image"
                  className="w-100 "
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  GALLERY --> */}
      <section className="container-fluidv  ">
        <div className="container py-5 GALLERY">
          <div className="row ">
            <h6>GALLERY</h6>
          </div>
          <div className="row mb-4">
            <div className="col-md-3 col-sm-12">
              <h4>All Our Goods</h4>
            </div>
            <div className="col-md-8 col-sm-12">
              <p>
                Consequuntur non vero totam iste perferendis dolorum. Veniam et
                omnis sunt eos alias. Similique magnam totam tenetur. Aut ut
                quidem qui animi ratione.
              </p>
            </div>
          </div>
          <div className="row GALLERY-IMG">
            <div className="col-md-3 col-sm-12 justify-content-center ">
              <div className=" m-2 justify-content-center">
                <Image className="w-100" src={HomeGalleryImag1} alt="gallery imag" />
              </div>
            </div>

            <div className="col-md-3 col-sm-12  justify-content-center">
              <div className=" m-2 justify-content-center">
                <Image className="w-100" src={HomeGalleryImag2} alt="gallery imag" />
              </div>
            </div>

            <div className="col-md-3 col-sm-12  justify-content-center">
              <div className=" m-2 justify-content-center">
                <Image className="w-100" src={HomeGalleryImag3} alt="gallery imag" />
              </div>
            </div>

            <div className="col-md-3 col-sm-12 justify-content-center ">
              <div className=" m-2 justify-content-center">
                <Image className="w-100" src={HomeGalleryImag4} alt="gallery imag" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/*======== WRITE TO US ====== */}
      <section className="container-fluid py-5 bg-dark text-light  WRITE-TO-US  ">
        <div className="container ">
          <div className="row text-center">
            <h6>WRITE TO US</h6>
            <h2>Get In Touch With Us</h2>
            <p>
              Modi nostrum corrupti praesentium enim eveniet nulla qui sit est.
              Nam et explicabo.Consequatur mollitia laboriosam quisquam
              asperiores. Optio ducimus nihil aut consequatur et eos quisquam ut
              neque.
            </p>

            <button type="button" className="btn  my-1">
              Contact Us
            </button>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default page;
