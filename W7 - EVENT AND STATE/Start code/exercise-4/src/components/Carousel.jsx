import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currImg, setCurrImg] = useState(0);
  /* You will need to hanle the click on left and right button */
  function handleLeft(event){
    setCurrImg((current) => carousel(current-1))
  }
  function handleRight(event){
    setCurrImg((current) => carousel(current+1))
  }
  /* You will need to manage the cases when we are on the last image or first image*/
  function carousel(current){
    if (current < 0){
      return images.length-1
    }
    if (current > images.length-1){
      return 0
    }
    return current
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeft} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currImg].src} alt={images[currImg].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRight} />
    </div>
  );
};
