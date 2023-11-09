import React from "react";

import styled from "styled-components";

import { ButtonAll } from "./Calculator.css";

const ButtonNumberStyle = styled(ButtonAll)``;

export default function ButtonNumber({ content, click }) {
  return (
    <>
      <ButtonNumberStyle onClick={click(content)}>{content}</ButtonNumberStyle>
    </>
  );
}
