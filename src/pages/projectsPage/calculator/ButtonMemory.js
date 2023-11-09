import React from "react";

import styled from "styled-components";
import { ButtonAll } from "./Calculator.css";

const ButtonMemoryStyle = styled(ButtonAll)``;

export default function ButtonMemory({ content, click }) {
  return (
    <>
      <ButtonMemoryStyle onClick={click(content)}>{content}</ButtonMemoryStyle>
    </>
  );
}
