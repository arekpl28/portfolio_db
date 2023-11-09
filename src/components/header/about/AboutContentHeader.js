import React, { useContext } from "react";

import { DataContext } from "../../../context/DataProvider";
import { Wrapper, Name } from "./AboutContentHeader.css";

export default function AboutContentHeader() {
  const { t } = useContext(DataContext);
  return (
    <>
      <Wrapper>
        <Name>{t("About")}</Name>
      </Wrapper>
    </>
  );
}
