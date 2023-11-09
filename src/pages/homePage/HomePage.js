import React, { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataProvider";

import Article from "./Article";

import { Wrapper, H3Style, MainStyle } from "./HomePage.css";

const HomePageContent = (props) => {
  const { setPath } = useContext(DataContext);

  useEffect(() => {
    setPath(props.match.path);
  }, [props.match.path, setPath]);

  return (
    <>
      <Wrapper>
        <H3Style></H3Style>
        <MainStyle>
          <Article></Article>
        </MainStyle>
      </Wrapper>
    </>
  );
};

export default HomePageContent;
