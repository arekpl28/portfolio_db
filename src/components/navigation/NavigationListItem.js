import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavItem, NavItemLink } from "./NavigationListItem.css";

const navItems = [
  { id: 0, title: "home", to: "/", exact: true },
  { id: 1, title: "about", to: "/about" },
  { id: 2, title: "projects", to: "/projects" },
  { id: 3, title: "contact", to: "/contact" },
];

export default function NavigationListItem({ handleClickBurger, className }) {
  const { scrollTop, t } = useContext(DataContext);

  const navListitem = navItems.map((item) => {
    return (
      <NavItem key={item.id} onClick={scrollTop} className={className}>
        <NavItemLink
          onClick={handleClickBurger}
          exact={item.exact}
          to={item.to}
        >
          {t("Nav." + item.title)}
        </NavItemLink>
      </NavItem>
    );
  });
  return <>{navListitem}</>;
}
