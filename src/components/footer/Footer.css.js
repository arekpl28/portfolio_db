import styled from "styled-components";
import { Logo } from "../navigation/Logo.css";
import { Button } from "../Button.css";
import { Input } from "../Input.css";
import { device } from "../../utils/variables";

export const H4 = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
`;
export const H5 = styled.h5`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgc_footer};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;
export const Div = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const LogoFooter = styled(Logo)`
  display: inline-block;
  font-size: 1.5rem;
  grid-area: logo;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.logo.color};
  @media screen and (orientation: landscape) and (max-height: 500px) {
    font-size: 1.3rem;
  }
  @media screen and ${device.desktop} {
    padding-left: 20px;
  }
`;
export const Wrap = styled.div``;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-bottom: ${({ theme }) => theme.border_bottom.small};
  @media screen and (min-width: 710px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: space-between;
  }
  @media screen and ${device.laptopM} {
    width: 80%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  }
  @media screen and ${device.laptopL} {
    width: 70%;
  }
`;
export const DivContentWrapper = styled.div`
  width: 100%;
`;
export const Contact = styled.div`
  width: 100%;
  height: 100%;
  i {
    font-size: 1rem;
    padding-top: 0.3rem;
  }
`;
export const Info = styled.a`
  display: grid;
  grid-template-columns: 2rem 1fr;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  color: ${({ theme }) => theme.text.color};
  list-style: none;
  text-decoration: none;
  p {
    padding-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
  }
  @media screen and ${device.laptopL} {
    &:hover {
      color: ${({ theme }) => theme.text.color_hover};
    }
  }
`;
export const Menu = styled.div`
  justify-self: center;
  @media screen and (min-width: 710px) {
    width: min-content;
    margin: 0 auto;
  }
`;

export const NavFooter = styled.ul`
  li {
    a {
      font-size: 1rem;
      margin: 10px 0 10px 30px;
      @media screen and (min-width: 710px) {
        margin: 0 auto;
      }
    }
  }
`;
export const Subscribe = styled.div`
  margin-top: 20px;
`;
export const InputFooter = styled(Input)`
  color: ${({ theme }) => theme.text.color};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_in.small};
`;
export const ButtonFooter = styled(Button)`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.text.color};
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
  @media screen and ${device.laptopL} {
    cursor: pointer;
    &:hover {
      box-shadow: ${({ theme }) => theme.box_shadow_in.small};
      color: ${({ theme }) => theme.text.color_hover};
    }
  }
`;
export const DivWrapperSocialMedia = styled.div`
  padding: 20px 0;
  text-align: center;
  @media screen and ${device.laptopM} {
    a {
      width: 30px;
      height: 30px;
      i {
        font-size: 0.8rem;
        border: 1px solid;
      }
    }
  }
`;
