import styled from "styled-components";
import { device } from "../../utils/variables";

import { LinkA } from "../../components/LinkA.css";

export const ArticleStyle = styled.article`
  display: grid;
  grid-template-columns: 30% 1fr;
  justify-items: center;
  align-items: center;
  border: 1px solid rgba(77, 77, 77, 0.3);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;
export const IconBox = styled.div`
  font-size: 4rem;
  display: grid;
  color: rgb(255, 199, 96);
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 4.8rem;
  }
`;
export const ContentBox = styled.div`
  display: grid;
  padding-left: 1rem;
`;
export const H5Title = styled.h5`
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 1.3rem;
  }
`;
export const Description = styled.p`
  font-size: 0.8rem;
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 1rem;
  }
`;
export const LinkHomePage = styled(LinkA)`
  margin-top: 20px;
  justify-self: right;
  align-self: flex-end;
  color: ${({ theme }) => theme.text.color};
`;
