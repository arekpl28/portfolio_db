import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";
import ProjectPage from "./projectsPage/ProjectPage";
import ContactPage from "./contactPage/ContactPage";

import ProjectsList from "./projectsPage/ProjectsList";

export default function HeaderContent() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/projects" component={ProjectsList}></Route>
        <Route path="/project/:id" component={ProjectPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
      </Switch>
    </>
  );
}
