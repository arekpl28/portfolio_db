import React, { useContext } from "react";

import { DataContext } from "../../../context/DataProvider";

import { Wrapper, Name } from "./ContactContentHeader.css";

export default function ContactContentHeader() {
  const { t } = useContext(DataContext);
  return (
    <>
      <Wrapper>
        <Name>{t("Contact")}</Name>
      </Wrapper>
    </>
  );
}
