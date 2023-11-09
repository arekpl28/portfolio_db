import React, { useEffect, useContext } from "react";

import { DataContext } from "../../../context/DataProvider";

import { BigWrapperHeaderAbout } from "../Wrapper.css";
import { ErrorImage } from "../HeaderImage.css";

export default function HeaderAbout() {
  const { setPath } = useContext(DataContext);
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  useEffect(() => {
    setPath("/about");
  }, [setPath]);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <BigWrapperHeaderAbout>
        <ErrorImage></ErrorImage>
      </BigWrapperHeaderAbout>
    </>
  );
}
