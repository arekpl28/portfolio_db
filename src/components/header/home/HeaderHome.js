import React, { useEffect } from "react";

import HomeContentHeader from "./HomeContentHeader";

import { BigWrapperHeader } from "../Wrapper.css";
import { HomeImage } from "../HeaderImage.css";

export default function HeaderHome() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <BigWrapperHeader>
        <HomeImage></HomeImage>
        <HomeContentHeader></HomeContentHeader>
      </BigWrapperHeader>
    </>
  );
}
