import React, { useEffect } from "react";

import AboutContentHeader from "./AboutContentHeader";

import { BigWrapperHeaderAbout } from "../Wrapper.css";

import { AboutImage, Clouds } from "../HeaderImage.css";

import img1 from "../../../img/png/cloud1.png";
import img2 from "../../../img/png/cloud2.png";
import img3 from "../../../img/png/cloud3.png";
import img4 from "../../../img/png/cloud4.png";
import img5 from "../../../img/png/cloud5.png";

export default function HeaderAbout() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <BigWrapperHeaderAbout>
        <AboutImage></AboutImage>
        <Clouds>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img3} alt="" />
        </Clouds>
        <AboutContentHeader></AboutContentHeader>
      </BigWrapperHeaderAbout>
    </>
  );
}
