import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../../context/DataProvider";

import { ImgStyle } from "./Navigation.css";

import pl_icon from "../../img/png/pl_icon.png";
import en_icon from "../../img/png/en_icon.png";
import no_icon from "../../img/png/no_icon.png";

export default function LanguageBurger() {
  const [activBurgerLang, setActivBurgerLang] = useState(false);
  const [langBurger] = useState([
    {
      id: 0,
      name: "pl",
      src: pl_icon,
      active: true,
    },
    {
      id: 1,
      name: "en",
      src: en_icon,
      active: true,
    },
    {
      id: 2,
      name: "no",
      src: no_icon,
      active: true,
    },
  ]);

  const {
    activeLangBurger,
    setActiveLangBurger,
    handleChangeLanguage,
    languaeFirst,
  } = useContext(DataContext);

  useEffect(() => {
    langBurger.map((item) => {
      if (item.name === languaeFirst) {
        return (item.active = true);
      } else if (item.name !== languaeFirst) {
        return (item.active = false);
      }
      return item;
    });
  }, [langBurger, languaeFirst]);

  const handleShowLanguage = (lg, id) => {
    if (!activBurgerLang) {
      langBurger.map((item) => {
        return (item.active = true);
      });
      setActivBurgerLang(true);
    } else {
      langBurger.map((item) => {
        if (item.id === id) {
          return (item.active = true);
        } else if (item.id !== id) {
          return (item.active = false);
        }
        return item;
      });
      setActivBurgerLang(false);
    }
    if (activeLangBurger) {
      setActiveLangBurger(false);
    } else if (!activeLangBurger) {
      setActiveLangBurger(true);
    }
  };
  const langBurgerList = langBurger.map((item) => (
    <ImgStyle
      key={item.id}
      className={item.active ? "visible" : ""}
      onClick={() => handleShowLanguage(item.name, item.id)}
    >
      <img
        onClick={() => handleChangeLanguage(item.name)}
        src={item.src}
        alt={item.name}
      ></img>
    </ImgStyle>
  ));

  return <>{langBurgerList}</>;
}
