import styled from "styled-components";
import { device } from "../../utils/variables";
import { LinkA } from "../../components/LinkA.css";

export const DivCard = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  width: 100%;
  margin: 20px 0px;
  padding: 20px 10px;
  justify-items: center;
  align-items: center;
  border: 1px solid rgba(77, 77, 77, 0.3);
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};

  @media screen and (orientation: landscape) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 6rem 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptopM} {
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr;
  }
`;
export const DivBox = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;

  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    padding-top: 10px;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    padding-top: 10px;
  }
`;
export const ImgBox = styled.div`
  position: relative;
`;
export const Icon = styled.i`
  font-size: 4.3rem;
  // color: ${({ theme }) => theme.icon.color};
  color: rgb(255, 199, 96);
  @media screen and (orientation: landscape) {
    font-size: 3rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 3.5rem;
  }
  @media screen and (orientation: landscape) and (max-height: 500px) {
    font-size: 3rem;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    font-size: 3rem;
  }
  @media screen and ${device.laptop} {
    font-size: 4rem;
  }
`;
export const ContentBox = styled.div`
  position: relative;
  text-align: center;
`;
export const H5Title = styled.h5`
  font-weight: 700;
  font-size: 1.2rem;
  list-style: 2px;
`;
export const Description = styled.p`
  font-size: 0.8rem;
`;
export const DivLink = styled.div`
  width: max-content;
  margin-top: 20px;

  @media screen and (orientation: landscape) {
    align-self: end;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    align-self: end;
  }
  @media screen and ${device.laptop} {
  }
`;
export const LinkCard = styled(LinkA)`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
`;
