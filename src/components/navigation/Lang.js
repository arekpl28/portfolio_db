import React, { useContext } from "react";

import { DataContext } from "../../context/DataProvider";

import { NavItem } from "./NavigationListItem.css";
import { Lg } from "./Lang.css";

import pl_icon from "../../img/png/pl_icon.png";
import en_icon from "../../img/png/en_icon.png";
import no_icon from "../../img/png/no_icon.png";

export default function Lang({ handleClickBurger }) {
  const {
    scrollTop,
    activeLang,
    setActiveLang,
    handleChangeLanguage,
  } = useContext(DataContext);

  const languageSelect = () => {
    setActiveLang(false);
    handleClickBurger();
    scrollTop();
  };

  return (
    <>
      <NavItem
        onClick={languageSelect}
        key="pl"
        className={activeLang ? "langFade" : ""}
      >
        <Lg>
          <img
            onClick={() => handleChangeLanguage("pl")}
            src={pl_icon}
            alt="Polski"
          />
          <img
            onClick={() => handleChangeLanguage("en")}
            src={en_icon}
            alt="Angielski"
          />
          <img
            onClick={() => handleChangeLanguage("no")}
            src={no_icon}
            alt="Norweski"
          />
        </Lg>
      </NavItem>
    </>
  );
}
