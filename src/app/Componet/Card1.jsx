import Image from "next/image";
import React from "react";

const Card1 = ({ Img, date, heading, Text, ButtonText }) => {
  return (
    <div className="Card1">
      <div>
        <Image src={Img} alt="image" />
      </div>
      <div className="text-start my-2">
        <span> {date} </span>
      </div>
      <div className="text-start my-2">
        <h3>{heading}</h3>
      </div>

      <div className="text-start my-2">
        <p>{Text}</p>
      </div>

      <div className="text-start">
        <button className="btn">
          <span>{ButtonText}</span>
        </button>{" "}
      </div>
    </div>
  );
};

export default Card1;
