import styled from "styled-components";
import { device } from "../../../utils/variables";

export const CalculatorWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  user-select: none;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
  @media screen and ${device.surface} and (orientation: portrait) {
    width: 80%;
  }
  @media screen and ${device.tablet} (min-height: 540px) {
    width: 400px;
  }
  @media screen and ${device.laptop} {
    width: 600px;
  }
`;

export const Calc = styled.div`
  display: grid;
  grid-template-columns: 60vw 20vw;
  grid-template-rows: 3rem 8vh 40vw 80vw;
  grid-template-areas: "display display" "memory memory" "logic functions" "numbers functions ";
  width: 100%;
  height: 100%;
  padding: 20px 0;
  @media screen and (orientation: landscape) and (max-height: 540px) {
    grid-template-columns: 20vw 20vw 50vw;
    grid-template-rows: 50px min-content 50vh;
    grid-template-areas: "display display display" "memory memory memory" "functions logic numbers";
  }
  @media screen and ${device.tablet} and (max-height: 540px) {
    grid-template-columns: 15vw 15vw 40vw;
    grid-template-rows: 50px min-content 50vh;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 33vh 11vh;
    grid-template-rows: 5rem 8vh 22vh 44vh;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    grid-template-columns: 225px 75px;
    grid-template-rows: 5rem 50px 150px 300px;
  }
  @media screen and ${device.tablet} and (min-height: 540px) {
    grid-template-columns: 225px 75px;
    grid-template-rows: 5rem 50px 150px 300px;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 375px 125px;
    grid-template-rows: 5rem 50px 150px 300px;
  }
`;

export const ButtonAll = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  margin: 0.4rem;
  border-radius: 10px;
  border: none;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  &:active {
    box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    margin: 0.8rem;
  }
`;
