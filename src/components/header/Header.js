import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderHome from "./home/HeaderHome";
import HeaderAbout from "./about/HeaderAbout";
import HeaderProjects from "./project/HeaderProjects";
import HeaderContact from "./contact/HeaderContact";
import HeaderError from "./error/HeaderError";

export default function Header() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HeaderHome}></Route>
        <Route path="/about" component={HeaderAbout}></Route>
        <Route path="/projects" component={HeaderProjects}></Route>
        <Route path="/project/:id" component={HeaderProjects}></Route>
        <Route path="/contact" component={HeaderContact}></Route>
        <Route component={HeaderError}></Route>
      </Switch>
    </>
  );
}
