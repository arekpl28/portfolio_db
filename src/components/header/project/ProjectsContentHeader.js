import React, { useContext } from "react";

import { DataContext } from "../../../context/DataProvider";

import { Wrapper, Name } from "./ProjectsContentHeader.css";

export default function ProjectsContentHeader() {
  const { projectName, t } = useContext(DataContext);
  return (
    <>
      <Wrapper>
        <Name>{t(`${projectName}`)}</Name>
      </Wrapper>
    </>
  );
}
