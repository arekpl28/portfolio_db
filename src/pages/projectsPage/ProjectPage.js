import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";

import ClockApp from "./clock/ClockApp";
import TodoApp from "./todo/TodoApp";
import Calculator from "./calculator/Calculator";

import {
  Wrapper,
  DivConetnt,
  DivMenu,
  DivRest,
  LinkProjects,
  LinkMenu,
  DivProject,
} from "./ProjectPage.css";

export default function ProjectPage(props) {
  const { setProjectName, t } = useContext(DataContext);
  const pathPage = props.match.params.id;

  useEffect(() => {
    setProjectName(pathPage);
  }, [pathPage, setProjectName]);

  return (
    <>
      <Wrapper>
        <DivConetnt>
          <DivMenu>
            <LinkProjects exact to="/projects">
              {t("All_projects")}
            </LinkProjects>
            <DivRest>
              <LinkMenu to="/project/clock">{t("Clock")}</LinkMenu>
              <LinkMenu to="/project/todo">{t("Todo")}</LinkMenu>
              <LinkMenu to="/project/calculator">{t("Calculator")}</LinkMenu>
            </DivRest>
          </DivMenu>
          <DivProject>
            <Route path="/project/clock" component={ClockApp}></Route>
            <Route path="/project/todo" component={TodoApp}></Route>
            <Route path="/project/calculator" component={Calculator}></Route>
          </DivProject>
        </DivConetnt>
      </Wrapper>
    </>
  );
}
