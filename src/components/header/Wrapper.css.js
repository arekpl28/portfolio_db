import styled from "styled-components";
import { device } from "../../utils/variables";

export const BigWrapperHeader = styled.header`
  position: relative;
  width: 100%;
  height: 85vh;
`;
export const BigWrapperHeaderAbout = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const SmallWrapperHeader = styled.header`
  position: relative;
  width: 100%;
  height: 45vh;
  @media screen and (orientation: landscape) and (max-height: 500px) {
    height: 60vh;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    height: 35vh;
  }
`;
