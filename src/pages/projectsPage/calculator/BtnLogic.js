import React from "react";
import styled from "styled-components";

import ButtonLogic from "./ButtonFunction";

export const BtnLogicStyle = styled.div`
  display: grid;
  grid-area: logic;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  color: #868686;
  @media screen and (orientation: landscape) and (max-height: 540px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const btns = [
  {
    content: "%",
  },
  {
    content: "CE",
  },
  {
    content: "C",
  },
  {
    content: "1/x",
  },
  {
    content: "ⁿ",
  },
  {
    content: "√",
  },
];

export default function BtnLogic({ click }) {
  const buttons = btns.map((btn) => {
    return (
      <ButtonLogic
        key={btn.content}
        content={btn.content}
        click={click}
      ></ButtonLogic>
    );
  });
  return (
    <>
      <BtnLogicStyle>{buttons}</BtnLogicStyle>
    </>
  );
}
