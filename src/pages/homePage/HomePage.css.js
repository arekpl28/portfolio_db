import styled from "styled-components";
import { device } from "../../utils/variables";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  justify-content: center;
  width: 100%;
  padding: 15vh 0 10vh;
  background-color: ${({ theme }) => theme.colors.bgc};
`;
export const H3Style = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 5rem;
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 2rem;
  }
`;
export const MainStyle = styled.main`
  display: grid;
  grid-template-columns: 90%;
  grid-template-rows: auto;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 45% 45%;
    gap: 2rem;
  }
  @media screen and ${device.surface} and (min-height: 540px) {
    grid-template-columns: 45% 45%;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    grid-template-columns: 45% 45%;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 35% 35%;
  }
  @media screen and ${device.laptopM} {
    grid-template-columns: 30% 30% 30%;
  }
  @media screen and ${device.desktop} {
    grid-template-columns: 30% 30% 30%;
  }
`;
