'use client'

import React, { useState } from "react";
import Card1 from "./Card1";
import OurProjectImag1 from "../../../public/img/img-1.png";
import OurProjectImag2 from "../../../public/img/img-2.png";
import OurProjectImag3 from "../../../public/img/img-3.png";
import OurProjectImag4 from "../../../public/img/b1.png";
import OurProjectImag5 from "../../../public/img/b10.png";

const Column3Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, img: OurProjectImag1, date: "Jan 20,2020", heading: "Nicoll Townhouse", text: "Culpa delectus deserunt numquam cumque. Sequi deleniti id porro dicta qui" },
    { id: 2, img: OurProjectImag2, date: "Jul 18,2020", heading: "Minus Deleniti", text: "Culpa delectus deserunt numquam cumque. Sequi deleniti id porro dicta qui tempore." },
    { id: 3, img: OurProjectImag3, date: "Jul 15,2020", heading: "Consequatur Dolores", text: "Debitis quo tempore quia qui non atque. Laborum corporis minima est." },
    { id: 4, img: OurProjectImag4, date: "Jan 20,2020", heading: "Nicoll Townhouse", text: "Culpa delectus deserunt numquam cumque. Sequi deleniti id porro dicta qui" },
    { id: 5, img: OurProjectImag5, date: "Jul 15,2020", heading: "Consequatur Dolores", text: "Debitis quo tempore quia qui non atque. Laborum corporis minima est." },
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider-button prev">&#10094;</button>
      <div className="slider-content">
        {visibleItems.map((item) => (
          <div key={item.id} className="slider-item">
            <Card1 Img={item.img} date={item.date} heading={item.heading} Text={item.text} ButtonText="View More →" />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider-button next">&#10095;</button>
    </div>
  );
};

export default Column3Slider;