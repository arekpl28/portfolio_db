import React, { useEffect } from "react";

import ContactContentHeader from "./ContactContentHeader";

import { SmallWrapperHeader } from "../Wrapper.css";

import { ContactImage } from "../HeaderImage.css";

export default function HeaderContact() {
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  const handleSticky = (e) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <>
      <SmallWrapperHeader>
        <ContactImage></ContactImage>
        <ContactContentHeader></ContactContentHeader>
      </SmallWrapperHeader>
    </>
  );
}
