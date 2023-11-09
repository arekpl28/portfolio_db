import React, { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataProvider";

import NavigationList from "./NavigationListItem";
import ScrollTopArrow from "./ScrollTopArrow";
import LanguageSelect from "./LanguageSelect";
import Lang from "./Lang";
import LanguageBurger from "./LanguageBurger";

import { DivDark, Nav, Burger, Line, NavUl, Language } from "./Navigation.css";
import { Logo } from "./Logo.css";

export default function Navigation() {
  const {
    burgerActive,
    setBurgerAcive,
    viewportWidth,
    path,
    scrollTop,
    setActiveLang,
    activeLang,
  } = useContext(DataContext);

  useEffect(() => {
    if (setBurgerAcive && viewportWidth > 710) {
      setBurgerAcive(false);
    }
  }, [setBurgerAcive, viewportWidth]);

  const handleClickBurger = (e) => {
    if (setBurgerAcive) {
      setBurgerAcive(false);
    }
    if (!burgerActive) {
      setBurgerAcive(true);
    }
    setActiveLang(false);
  };

  return (
    <>
      <Nav className={path === "/about" ? "about" : ""}>
        <Logo onClick={scrollTop} exact to="/">
          Logo
        </Logo>
        {burgerActive ? <DivDark onClick={handleClickBurger}></DivDark> : null}
        <Burger
          className={burgerActive ? "burgerActive" : ""}
          onClick={handleClickBurger}
        >
          <Line className={path === "/about" ? "about" : ""}></Line>
          <Line className={path === "/about" ? "about" : ""}></Line>
          <Line className={path === "/about" ? "about" : ""}></Line>
        </Burger>
        <NavUl className={burgerActive ? "navActive" : ""}>
          <NavigationList
            className={burgerActive ? "navLinkFade" : ""}
            handleClickBurger={burgerActive ? handleClickBurger : null}
          ></NavigationList>
          <LanguageSelect
            key="language"
            className={burgerActive ? "navLinkFade" : ""}
          ></LanguageSelect>
          {activeLang ? (
            <Lang handleClickBurger={handleClickBurger}></Lang>
          ) : null}
        </NavUl>
        <Language>
          <LanguageBurger></LanguageBurger>
        </Language>
      </Nav>
      <ScrollTopArrow />
    </>
  );
}
