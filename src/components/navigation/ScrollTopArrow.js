import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { ScrollTop } from "./ScrollTopArrow.css";

export default function ScrollTopArrow() {
  const { scrollTop, showScroll, setShowScroll } = useContext(DataContext);

  const offset = 500;

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > offset) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= offset) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <ScrollTop
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      />
    </>
  );
}
