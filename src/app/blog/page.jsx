"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(1);

  function handleActiveLink(linkValue) {
    setTab(linkValue);
  }

  useEffect(() => {
    fetch("/JsonData/Blog.json") // Ensure Gallery.json is inside /public
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // Filter data based on category
  const Projects = data.filter((list) => list.type === "Projects");
  const Achievement = data.filter((list) => list.type === "Achievement");
  const LuxApartment = data.filter((list) => list.type === "Lux Apartment");
  const NewsUpdates = data.filter((list) => list.type === "News & Updates");

  // Determine which data to display
  const ShowData =
    tab === 1
      ? data
      : tab === 2
      ? Projects
      : tab === 3
      ? Achievement
      : tab === 4
      ? LuxApartment
      : tab === 5
      ? GreenHouse
      : tab === 6
      ? NewsUpdates
      : [];

  const perPagecard = 10;
  const totalPage = Math.ceil(ShowData.length / perPagecard);
  const [currentPageData, setCurrentPageData] = useState(0);

  function handelStartIndex(PageDataStartIndex) {
    setCurrentPageData(PageDataStartIndex);
  }

  // Handle Previous and Next button functionality
  function handlePrevious() {
    if (currentPageData > 0) {
      setCurrentPageData(currentPageData - perPagecard);
    }
  }

  function handleNext() {
    if (currentPageData + perPagecard < ShowData.length) {
      setCurrentPageData(currentPageData + perPagecard);
    }
  }

  return (
    <div className="GALLERY">
      {/* HERO SECTION */}
      <section className="container-fluid GALLEY-HERO-SECTION">
        <div className="container">
          <div className="row">
            <div className="col-12 p-5 text-center text-light">
              <h2 className="pt-5 my-2">Blog</h2>
              <h6 className="my-2">
                Home / Blog
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* TAB SECTION */}
      <section className="container-fluid pt-5 GALLERY-SECTION-TAB">
        <div className="container">
          <div className="row ">
            <ul className="d-flex GALLERY-TAB">
              {[
                { id: 1, label: "All" },
                { id: 2, label: "Projects" },
                { id: 3, label: "Achievement" },
                { id: 4, label: "Lux Apartment" },
                { id: 5, label: "News & Updates" },
              ].map((tabItem) => (
                <li
                  key={tabItem.id}
                  className="p-1 mx-2"
                  onClick={() => handleActiveLink(tabItem.id)}
                  style={{
                    color:
                      tab === tabItem.id ? "blueviolet" : "black",
                  }}
                >
                  {tabItem.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* GALLERY ITEMS SECTION */}
      <section className="container-fluid py-2">
        <div className="container">
          <div className="row">
            {(() => {
              if (ShowData.length > 0) {
                let items = [];
                let currentData = ShowData.slice(
                  currentPageData,
                  currentPageData + perPagecard
                );
                currentData.forEach((item, i) => {
                  items.push(
                    <div key={i} className="col-md-4 p-3">
                      <div className="card">
                        <img
                          src={`/img/${item.image}`}
                          alt={item.name}
                          className="card-img-top"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-body">
                          <p>By Admin {item.Date}</p>
                          <h5>{item.text}</h5>

                          <p> Read more -- &gt; </p>
                
                        </div>
                      </div>
                    </div>
                  );
                });
                return items;
              } else {
                return (
                  <p
                    className="text-center"
                    style={{ padding: "20px", fontSize: "1.2em" }}
                  >
                    No data available
                  </p>
                );
              }
            })()}
          </div>
        </div>
      </section>
      {/* PAGINATION SECTION */}
      <section className="container-fluid py-5  GALLEY-PAGINATION-SECTION">
        <div className="container">
          <div className="row">
            {/* Page Numbers */}
            <div className="col">
              <div className="d-flex justify-content-end align-items-center">
                <div>
                  <button className="btn" onClick={handlePrevious}>
                    Previous
                  </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <ul className="p-0 d-flex justify-content-center align-items-center" >
                    {Array.from({ length: totalPage }, (_, i) => (
                      <li
                        key={i}
                        onClick={() => handelStartIndex(i * perPagecard)}
                        style={{
                          backgroundColor:
                            currentPageData === i * perPagecard
                              ? "#47a2df"
                              : "transparent",
                        }}
                      >
                        {i + 1}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* Next Button */}
                  <button className="btn" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
