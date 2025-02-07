"use client";
import React, { useState } from "react";
// componet
import HeroSection from "./Componet/HeroSection";
import Image from "next/image";

import AboutUsImage from "../../public/img/bg3.png";

import Icon1 from "../../public/img/icon-1.png";
import Icon2 from "../../public/img/icon-2.png";
import Icon3 from "../../public/img/icon-3.png";
import Icon4 from "../../public/img/icon-4.png";

import ChooseImg from "../../public/img/choose.png";

import Card1 from "./Componet/Card1";

import TestmoniceQutesImage from "../../public/img/qoute.png";

import HomeGalleryImag1 from "../../public/img/img-1.png";
import HomeGalleryImag2 from "../../public/img/img-2.png";
import HomeGalleryImag3 from "../../public/img/img-3.png";
import HomeGalleryImag4 from "../../public/img/img-4.png";

import ColumnSlider from "./Componet/Column3Slider";

import BlogImage1 from "./../../public/img/img-6.png";
import BlogImage2 from "./../../public/img/img-7.png";
import BlogImage3 from "./../../public/img/img-8.png";


import patnerImg1 from "../../public/img/partner1.png";
import patnerImg2 from "../../public/img/partner2.png";
import patnerImg3 from "../../public/img/partner3.png";
import patnerImg4 from "../../public/img/partner4.png";
import patnerImg5 from "../../public/img/partner5.png";
import patnerImg6 from "../../public/img/partner6.png";

const page = () => {
  return (
    <>
      <HeroSection />
      <section className="container-fluid">
        <div className="container my-5 HOME-ABOUT-SECTION ">
          <div className="row">
            <div className="col-md-6">
              <Image src={AboutUsImage} alt="About Us" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="p-2">
                <h5>
                  <span>ABOUT US</span>
                </h5>
                <h2>Who We Are</h2>
                <p>
                  Rem atque earum sed possimus eaque quae magnam. Unde sunt et
                  et cumque ipsa. Eos soluta voluptatibus quas sapiente eum.
                  Quibusdam quos rerum. Blanditiis rerum maxime perspiciatis
                  rerum labore molestiae impedit velit. Sit aut placeat autem
                  quis. Impedit corporis est fugiat voluptas sint et impedit.
                  Quisquam unde harum voluptates quia quam aut numquam illum.
                  Enim nam eum. Ea qui eos ut qui aperiam est sed esse autem.Est
                  non eos accusamus aperiam quod laboriosam. Id modi ullam.
                  Omnis et et vel a nesciunt sunt.
                </p>

                <h5>
                  <span>READ MORE --</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid CHOOSEUS-SECTION">
        <div className="container my-5 py-5 ">
          <div className="row">
            <div className="col-md-7 d-flex justify-content-center align-items-center">
              <div className="p-2">
                <h2 className="my-3">Who Choose Us</h2>
                <div className="d-flex ">
                  <div className="m-2">
                    <Image src={Icon1} alt="About Us" />
                    <h4>Wide Range Of Properties</h4>
                    <p>
                      Ut eius qui autem aliquam. Aut et ad explicabo dolorum
                      fugit.
                    </p>
                  </div>
                  <div className="m-2">
                    <Image src={Icon2} alt="About Us" />
                    <h4>Trusted By Thousands</h4>
                    <p>Commodi rerum esse ea. Laudantium quaerat commodi</p>
                  </div>
                </div>

                <div className="d-flex ">
                  <div className="m-2">
                    <Image src={Icon3} alt="About Us" />
                    <h4>Wide Range Of Properties</h4>
                    <p>
                      Ut eius qui autem aliquam. Aut et ad explicabo dolorum
                      fugit.
                    </p>
                  </div>
                  <div className="m-2">
                    <Image src={Icon4} alt="About Us" />
                    <h4>Trusted By Thousands</h4>
                    <p>Commodi rerum esse ea. Laudantium quaerat commodi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-5 ">
              <Image className="IMAGE-2" src={ChooseImg} alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJCT */}

      <section className="container-fluid OUR-PRJECTS-SECTION">
        <div className="container my-5 py-5 ">
          <div className="row text-center">
            <h6>OUR PROJECTS</h6>
            <h2 className="mb-3">Explore What We Offer</h2>
          </div>

          <div className="row">
            <div className="col">
              <ColumnSlider />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CATEGORIES  --> */}
      <section className="container-fluid   HOME-CATEGORIES">
        <div className="container py-5  ">
          <div className="row text-light">
            <div className="col-lg-4">
              <div>
                <h6>CATEGORIES</h6>
                <h2>Browse Listing By Category</h2>
                <p>
                  Highlight the best of your properties by using the List
                  Category shortcode. You can list categories, types, cities,
                  areas and states.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row ">
                <div className="col-md-4 col-sm-12">
                  <div className="mx-md-2 my-sm-2s HOME-CATEGORIES-IMG">
                    <Image src={HomeGalleryImag1} alt="Home Gallery" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="mx-md-2 my-sm-2s HOME-CATEGORIES-IMG">
                    <Image src={HomeGalleryImag2} alt="Home Gallery" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="mx-md-2 my-sm-2s HOME-CATEGORIES-IMG">
                    <Image src={HomeGalleryImag3} alt="Home Gallery" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blogs */}
      <section className="container-fluid OUR-BLOGS-SECTION">
        <div className="container my-5 py-5 ">
          <div className="row text-center">
            <h6>OUR BLOGS</h6>
            <h2 className="mb-3">Explore our News & Updates</h2>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Card1
                Img={BlogImage1}
                date={"By Admin - December 23th 2020"}
                heading={""}
                Text={"Sequi deserunt numquam quaerat in consequatur."}
                ButtonText={"Read More →"}
              />
            </div>
            <div className="col-md-4">
              <Card1
                Img={BlogImage2}
                date={"By Admin - December 23th 2020"}
                heading={""}
                Text={"Sequi deserunt numquam quaerat in consequatur.."}
                ButtonText={"View More →"}
              />
            </div>
            <div className="col-md-4">
              <Card1
                Img={BlogImage1}
                date={"By Admin - December 23th 2020"}
                heading={""}
                Text={"Sequi deserunt numquam quaerat in consequatur."}
                ButtonText={"Read More →"}
              />
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
    </>
  );
};

export default page;
