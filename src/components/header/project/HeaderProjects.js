import React, { useEffect } from "react";

import ProjectsContentHeader from "./ProjectsContentHeader";

import { SmallWrapperHeader } from "../Wrapper.css";
import { ProjectImage } from "../HeaderImage.css";

export default function HeaderProjects() {
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
        <ProjectImage></ProjectImage>
        <ProjectsContentHeader></ProjectsContentHeader>
      </SmallWrapperHeader>
    </>
  );
}
