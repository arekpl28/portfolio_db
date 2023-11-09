import styled from "styled-components";
import { device } from "../../utils/variables";

export const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 1rem;
  padding: 0 10px;
  overflow: hidden;

  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (orientation: landscape) and (min-height: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (max-height: 500px) and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptopM} {
    column-gap: 4rem;
    padding: 0 5rem;
  }
  @media screen and ${device.desktop} {
    column-gap: 9rem;
    padding: 0 9rem;
  }
`;
