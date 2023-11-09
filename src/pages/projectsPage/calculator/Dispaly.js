import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/variables";

export const DisplayStyle = styled.div`
  display: grid;
  grid-area: display;
  font-family: "Nunito", sans-serif;
  width: 100%;
  text-align: right;
  align-content: center;
  font-size: 2rem;
  padding: 0.6rem 0.75rem;
  font-weight: 300;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  color: ${({ theme }) => theme.text.color};
  overflow: scroll;
  @media screen and ${device.laptop} {
    overflow: hidden;
  }
`;

export default function Display({ value }) {
  return (
    <>
      <DisplayStyle>{value}</DisplayStyle>
    </>
  );
}
