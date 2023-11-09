import styled from "styled-components";
import { device } from "../../utils/variables";
import { NavLinkA } from "../../components/NavLinkA.css";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgc};
`;
export const Container = styled.div`
  display: grid;
  width: 250px;
  grid-gap: 4vw;
  padding: 4vw;
  margin: 0 auto;
  @media screen and ${device.mobileM} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: center;
    align-content: center;
    width: 100%;
  }
  @media screen and ${device.laptopM} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
    justify-content: center;
    align-content: center;
    width: 100%;
  }
`;
export const Box = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(77, 77, 77, 0.3);
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;
export const ImgBox = styled.div`
  width: 100%;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ContentBox = styled.div`
  display: grid;
  padding-top: 10px;
  text-align: center;
  grid-template-rows: min-content 1fr min-content;
  transition: 0.6s;
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
  }
`;
export const LinkApp = styled(NavLinkA)`
  width: max-content;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  justify-self: center;
  margin-top: 1rem;
  font-size: 0.8rem;
`;
