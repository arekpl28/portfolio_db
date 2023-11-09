import React from "react";
import styled from "styled-components";

import ButtonNumber from "./ButtonNumber";

export const BtnNumbersStyle = styled.div`
  display: grid;
  grid-area: numbers;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  color: ${({ theme }) => theme.text.color_hover};
`;

const btns = [
  {
    content: "7",
  },
  {
    content: "8",
  },
  {
    content: "9",
  },
  {
    content: "4",
  },
  {
    content: "5",
  },
  {
    content: "6",
  },
  {
    content: "1",
  },
  {
    content: "2",
  },
  {
    content: "3",
  },
  {
    content: "-/+",
  },
  {
    content: "0",
  },
  {
    content: ".",
  },
];

export default function BtnNumbers({ click }) {
  const buttons = btns.map((btn) => {
    return (
      <ButtonNumber
        key={btn.content}
        content={btn.content}
        click={click}
      ></ButtonNumber>
    );
  });
  return (
    <>
      <BtnNumbersStyle>{buttons}</BtnNumbersStyle>
    </>
  );
}
