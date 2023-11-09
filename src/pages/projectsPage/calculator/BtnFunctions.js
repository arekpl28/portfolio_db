import React from "react";
import styled from "styled-components";

import ButtonFunction from "./ButtonFunction";

export const BtnFunctionsStyle = styled.div`
  display: grid;
  grid-area: functions;
  grid-template-columns: 1fr;
  color: #03a9f4;
  @media screen and (orientation: landscape) and (max-height: 540px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const btns = [
  {
    content: "⇐",
  },
  {
    content: "/",
  },
  {
    content: "x",
  },
  {
    content: "-",
  },
  {
    content: "+",
  },
  {
    content: "=",
  },
];

export default function BtnFunctions({ click }) {
  const buttons = btns.map((btn) => {
    return (
      <ButtonFunction
        key={btn.content}
        content={btn.content}
        click={click}
      ></ButtonFunction>
    );
  });
  return (
    <>
      <BtnFunctionsStyle>{buttons}</BtnFunctionsStyle>
    </>
  );
}
