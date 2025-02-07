"use client";

import Image from "next/image";
import AboutImg from "../../../public/img/about.png";

import ResentImg from "../../../public/img/img-2.png";
import ResentImg1 from "../../../public/img/img-3.png";

import g2 from "../../../public/img/g2.png";

import TestmoniceQutesImage from "../../../public/img/qoute.png";

// ABOUT-WORK imGE
import AboutWork from "../../../public/img/p13.png";
import AboutWork1 from "../../../public/img/p14.png";

// RESIDENTIAL-PROJECTS

import ResidenitalProject from "../../../public/img/p1.png";
import ResidenitalProject1 from "../../../public/img/p2.png";
import ResidenitalProject2 from "../../../public/img/p4.png";
import ResidenitalProject3 from "../../../public/img/p6.png";
import ResidenitalProject4 from "../../../public/img/p5.png";

// COMMERCIAL-PROJECTS

import CommerctalProject from "../../../public/img/p6.png";
import CommerctalProject1 from "../../../public/img/p7.png";
import CommerctalProject2 from "../../../public/img/p8.png";
import CommerctalProject3 from "../../../public/img/p1.png";
import CommerctalProject4 from "../../../public/img/p10.png";
import CommerctalProject5 from "../../../public/img/p11.png";
import CommerctalProject6 from "../../../public/img/p12.png";

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
    <div className="PROJECT">
      {/* <!--PROJECT-HERO-SECTION --> */}
      <section className="container-fluid  PROJECT-HERO-SECTION ">
        <div className="container ">
          <div className="row ">
            <div className="col-12  p-5 text-center text-light">
              <h2 className="pt-5 my-2">Explore Our Projects</h2>
              <h6 style={{ fontFamily: "Bellefair" }} className="my-2">
                Home / Project
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT-ABOUT-WORK */}
      <section className="container-fluid py-5  ABOUT-WORK-SECTION ">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
              <div className="p-lg-3 p-2">
                <h6>ABOUT OUR WORK</h6>
                <h2>One Place For All Your Projects</h2>
                <p>
                  Kem atque earum sed possimus eaque quae magnam. Unde sunt et
                  et cumque ipsa. Eos soluta voluptatibus quas sapiente eum.
                  Quibusdam quos rerum.Blanditiis rerum maxime perspiciatis
                  rerum labore molestiae impedit velit. Sit aut placeat autem
                  quis. Impedit corporis est fugiat voluptas sint et impedit.
                  Quisquam unde harum voluptates quia quam aut numquam illum.
                  Enim nam eum. Ea qui eos ut qui aperiam est sed esse autem.Est
                  non eos accusamus aperiam quod laboriosam. Id modi ullam.
                  Omnis et et vel a nesciunt sunt. Rem atque earum sed possimus
                  eaque quae magnam. Unde sunt et et cumque ipsa. Eos soluta
                  voluptatibus quas sapiente eum. Quibusdam quos rerum
                  Blanditiis rerum maxime perspiciatis rerum labore molestiae
                  impedit velit
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="d-flex">
                <div className="p-lg-3 p-2 mb-4 ">
                  <img
                    src={"img/p13.png"}
                    alt="Home Gallery"
                    height={300}
                    style={{width:'100%'}}
                  />
                </div>
                <div className="p-lg-3 p-2 mt-4">
               <img
                    src={"img/p14.png"}
                    alt="Home Gallery"
                    height={300}
                    style={{width:'100%'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5 bg-dark RESIDENTIAL-PROJECTS-SECTION ">
        <div className="container ">
          <div className="row text-light ">
            <div className="col-md-6">
              <div className="p-lg-3 p-2">
                <h6>RESIDENTIAL PROJECTS</h6>
                <h2>One Place For All Your Projects</h2>
                <p>
                  Excepturi enim sint laboriosam quia et sed delectus. Quisquam
                  aut sed quasi praesentium. Quaerat atque aperiam autem ullam
                  nobis. Deleniti ut qui. Vitae eligendi quas. Odit odit dolor
                  dolore ut officia.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="d-flex">
                <div className="p-lg-3 p-2  ">
                  <Image
                    src={ResidenitalProject}
                    alt="Home Gallery"
                    width={150}
                    height={190}
                  />
                </div>
                <div className="p-lg-3 p-2 ">
                  <Image
                    src={ResidenitalProject1}
                    alt="Home Gallery"
                    width={150}
                    height={190}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="p-1">
                <Image
                  src={ResidenitalProject2}
                  alt="Home Gallery"
                  height={300}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-1">
                <Image
                  src={ResidenitalProject3}
                  alt="Home Gallery"
                  height={300}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-1">
                <Image
                  src={ResidenitalProject4}
                  alt="Home Gallery"
                  height={300}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL-PROJECTS-SECTION */}
      <section className="container-fluid py-5  COMMERCIAL-PROJECTS-SECTION ">
        <div className="container ">
          <div className="row ">
            <div className="col-md-4">
              <div className="p-lg-3 p-2">
                <h6>COMMERCIAL PROJECTS</h6>
                <h2>Explore Our Commercial Projects</h2>
              </div>
            </div>

            <div className="col-md-8 d-flex justify-content-center align-items-center">
              <div className="d-flex">
                <div className="p-lg-3 p-2  ">
                  <p>
                    Maiores qui corporis. Eos quaerat vel culpa optio impedit
                    soluta ea.Impedit laboriosam earum. Vitae quia corrupti
                    labore qui voluptates tenetur harum voluptatem eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div>
                <div className="d-flex">
                  <div className="p-lg-2 p-1  ">
                    <Image
                      src={CommerctalProject}
                      alt="Home Gallery"
                      height={300}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="p-lg-2 p-1 ">
                    <Image
                      src={CommerctalProject1}
                      alt="Home Gallery"
                      height={300}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-lg-2 p-1  ">
                    <Image
                      src={CommerctalProject2}
                      alt="Home Gallery"
                      height={300}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="p-lg-2 p-1 ">
                    <Image
                      src={CommerctalProject3}
                      alt="Home Gallery"
                      height={300}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={"img/p9.png"}
                alt="Home Gallery"
                style={{ height: "100%", width: "100%", padding: "10px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="p-1">
                <Image
                  src={CommerctalProject4}
                  alt="Home Gallery"
                  height={300}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-1">
                <Image
                  src={CommerctalProject5}
                  alt="Home Gallery"
                  height={300}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-1">
                <Image
                  src={CommerctalProject6}
                  alt="Home Gallery"
                  height={300}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5 bg-dark text-light  ">
        <div className="container ">
          <div className="row text-center">
            <div className="col">
              <h6>WORK WITH OUR TEAM</h6>
              <h2>Have a Project of your own?</h2>
              <p>
                Modi nostrum corrupti praesentium enim eveniet nulla qui sit
                est. Nam et explicabo.Consequatur mollitia laboriosam quisquam
                asperiores. Optio ducimus nihil aut consequatur et eos quisquam
                ut neque.
              </p>

              <button type="button" className="btn btn-info  my-1 ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
