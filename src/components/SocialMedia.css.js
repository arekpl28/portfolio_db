import styled from "styled-components";
import { device } from "../utils/variables";

export const SocialIcons = styled.a`
  display: inline-block;
  width: 10vw;
  height: 10vw;
  margin: 0 2vw;
  text-decoration: none;
  outline: 0;
  i {
    display: grid;
    width: 100%;
    height: 100%;
    font-size: 4vw;
    place-content: center;
    border: 1px solid;
    border-radius: 50%;
    transition: 0.3s;
    color: white;
  }
  @media screen and (max-height: 500px) and (orientation: landscape) {
    width: 6vw;
    height: 6vw;
    margin: 0 1vw;
    i {
      font-size: 2vw;
    }
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    width: 7vw;
    height: 7vw;
    margin: 0 2vw;
    i {
      font-size: 2.5vw;
      border: 2px solid;
    }
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    width: 6vw;
    height: 6vw;
    margin: 0 2vw;
    i {
      font-size: 2.5vw;
      border: 2px solid;
    }
  }
  @media screen and ${device.laptopM} {
    width: 3vw;
    height: 3vw;
    margin: 0 1vw;
    i {
      font-size: 1vw;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.green};
        box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.green};
      }
    }
  }
`;
