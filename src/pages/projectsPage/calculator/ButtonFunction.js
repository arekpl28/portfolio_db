import React from "react";

import styled from "styled-components";
import { ButtonAll } from "./Calculator.css";

const ButtonFunctionStyle = styled(ButtonAll)``;

export default function ButtonFunction({ content, click }) {
  return (
    <>
      <ButtonFunctionStyle onClick={click(content)}>
        {content}
      </ButtonFunctionStyle>
    </>
  );
}
