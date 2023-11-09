import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/variables";

import ButtonMemory from "./ButtonMemory";

export const BtnMemoryStyle = styled.div`
  grid-area: memory;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  color: green;
  margin-top: 10px;
  padding-bottom: 10px;
  @media screen and ${device.laptop} {
    padding-bottom: 10px;
  }
`;

const btns = [
  {
    content: "MC",
  },
  {
    content: "MR",
  },
  {
    content: "M+",
  },
  {
    content: "M-",
  },
  {
    content: "MS",
  },
];

export default function BtnMemory({ click }) {
  const buttons = btns.map((btn) => {
    return (
      <ButtonMemory
        key={btn.content}
        content={btn.content}
        click={click}
      ></ButtonMemory>
    );
  });
  return (
    <>
      <BtnMemoryStyle>{buttons}</BtnMemoryStyle>
    </>
  );
}
