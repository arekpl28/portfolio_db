import React from "react";

import styled from "styled-components";
import { ButtonAll } from "./Calculator.css";

const ButtonLogicStyle = styled(ButtonAll)``;

export default function ButtonLogic({ content, click }) {
  return (
    <>
      <ButtonLogicStyle onClick={click(content)}>{content}</ButtonLogicStyle>
    </>
  );
}
