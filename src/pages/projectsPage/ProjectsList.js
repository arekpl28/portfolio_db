import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

import img_clock from "../../img/clock.jpg";
import img_todo from "../../img/todo.jpg";
import img_calculator from "../../img/calculator.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  Wrapper,
  Container,
  Box,
  ImgBox,
  ContentBox,
  LinkApp,
} from "./ProjectsList.css";

export default function ProjectListPage(props) {
  const { setProjectName, setPath, t, viewportWidth } = useContext(DataContext);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    setProjectName("My_projects");
    setPath(props.match.path);
  }, [props.match.path, setPath, setProjectName]);
  return (
    <>
      <Wrapper>
        <Container>
          <Box data-aos={viewportWidth < 565 ? "fade-right" : "fade-right"}>
            <ImgBox>
              <Link to={`/project/clock`}>
                <img src={img_clock} alt="" />
              </Link>
            </ImgBox>
            <ContentBox>
              <h2>{t("Clock")}</h2>
              <p>{t("Description_project_card_clock")}</p>
              <LinkApp to={`/project/clock`}>{t("See_more")}</LinkApp>
            </ContentBox>
          </Box>
          <Box data-aos={viewportWidth < 565 ? "fade-left" : "fade-up"}>
            <ImgBox>
              <Link to={`/project/todo`}>
                <img src={img_todo} alt="" />
              </Link>
            </ImgBox>
            <ContentBox>
              <h2>{t("Todo")}</h2>
              <p>{t("Description_project_card_todo")}</p>
              <LinkApp to={`/project/todo`}>{t("See_more")}</LinkApp>
            </ContentBox>
          </Box>
          <Box data-aos={viewportWidth < 565 ? "fade-right" : "fade-left"}>
            <ImgBox>
              <Link to={`/project/calculator`}>
                <img src={img_calculator} alt="" />
              </Link>
            </ImgBox>
            <ContentBox>
              <h2>{t("Calculator")}</h2>
              <p>{t("Description_project_card_calculator")}</p>
              <LinkApp to={`/project/calculator`}>{t("See_more")}</LinkApp>
            </ContentBox>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
