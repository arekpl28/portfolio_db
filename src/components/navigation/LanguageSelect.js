import React, { useContext } from "react";

import { DataContext } from "../../context/DataProvider";

import { NavItem } from "./NavigationListItem.css";

export default function LanguageSelect({ className }) {
  const { activeLang, setActiveLang } = useContext(DataContext);

  const languageSelect = () => {
    if (activeLang) {
      setActiveLang(false);
    } else if (!activeLang) {
      setActiveLang(true);
    }
  };

  return (
    <>
      <NavItem onClick={languageSelect} key="language" className={className}>
        <div>Language</div>
      </NavItem>
    </>
  );
}
