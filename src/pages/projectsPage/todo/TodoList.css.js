import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { device } from "../../../utils/variables";

export const DivTodoContainer = styled.div`
  width: 100%;
  max-height: 30vh;
  @media screen and (orientation: landscape) {
    max-height: 50vh;
  }
  @media screen and ${device.tablet} and (orientation: landscape) {
    max-height: 40vh;
  }
  @media screen and ${device.laptop} {
    max-height: 20vh;
  }
`;
export const UlTodoList = styled.ul`
  list-style: none;
  border: none;
`;
export const Bar = styled(SimpleBar)`
  max-height: 30vh;
  @media screen and (orientation: landscape) {
    max-height: 50vh;
  }
  @media screen and ${device.tablet} and (orientation: landscape) {
    max-height: 40vh;
  }
  @media screen and ${device.laptop} {
    max-height: 20vh;
  }
`;
