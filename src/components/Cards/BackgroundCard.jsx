import React from "react";
import BlobYellow from "../../assets/svg/blob-1.svg";
import BlobGreen from "../../assets/svg/blob-2.svg";
import BlobPink from "../../assets/svg/blob-3.svg";

const BackgroundCard = ({ children }) => {
  return (
    <div className="relative overflow-hidden p-6 bg-white rounded-xl text-center w-96 drop-shadow-md group/backg hover:drop-shadow-2xl">
      {children}
      <img className="absolute w-14 -top-9 right-5 transition ease-in-out delay-150 duration-700 group-hover/backg:translate-y-10" src={BlobYellow} />
      <img className="absolute w-14 bottom-0 -left-4 transition ease-in-out delay-150 duration-700 group-hover/backg:translate-x-5 group-hover/backg:-translate-y-3" src={BlobGreen} />
      <img className="absolute w-16 bottom-28 -right-5 transition ease-in-out delay-150 duration-700 group-hover/backg:-translate-x-4" src={BlobPink} />
    </div>
  );
};

export default BackgroundCard;
