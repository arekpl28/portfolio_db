import styled, { keyframes } from "styled-components";
import { device } from "../../../utils/variables";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 85vh;
  top: 0%;
  left: 0%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
`;
const nameAnimation = keyframes`
0% {
    transform: translateX(20%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;
export const Name = styled.h1`
  position: absolute;
  width: 100%;
  left: 0%;
  bottom: 40vh;
  font-size: 7.5vw;
  // animation: ${nameAnimation} 1s ease;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    bottom: 40vh;
    font-size: 6vw;
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    bottom: 45vh;
    font-size: 6vw;
  }
  @media screen and ${device.laptopM} {
    bottom: 45vh;
    font-size: 5vw;
  }
`;
const professionAnimation = keyframes`
0% {
    left: -20%;
    opacity: 0;
  }

  100% {
    left: 0%;
    opacity: 1;
  }
`;
export const Profession = styled.h2`
  position: absolute;
  width: 100%;
  bottom: 35vh;
  left: 0%;
  font-size: 4vw;
  font-weight: 200;
  // animation: ${professionAnimation} 1s ease;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    bottom: 35vh;
    font-size: 3vw;
  }
  @media screen and (min-width: 710px) and (min-height: 530px) {
    bottom: 38vh;
    font-size: 3vw;
  }
  @media screen and ${device.laptopM} {
    bottom: 38vh;
    font-size: 2.2vw;
  }
`;
export const DivMedia = styled.div`
  position: absolute;
  width: 100%;
  bottom: 25vh;
  @media screen and (max-height: 500px) and (orientation: landscape) {
    bottom: 20vh;
  }
`;
const profilImgAnimation = keyframes`
0% {
    width: 0vh;
    height: 0vh;
  }

  100% {
    width: 30vh;
    height: 30vh;
  }
`;
export const DivProfileImg = styled.div`
  position: absolute;
  width: 30vh;
  height: 30vh;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 15vh);
  border: 10px solid rgba(250, 250, 250, 0.1);
  border-radius: 50%;
  animation: ${profilImgAnimation} 1s ease;
  img {
    width: 100%;
    border-radius: 50%;
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    border-width: 15px;
  }
  @media screen and ${device.laptop} and (orientation: portrait) {
    border-width: 20px;
  }
  @media screen and (orientation: landscape) {
    width: 30vh;
    height: 30vh;
    border-width: 8px;
  }
  @media screen and ${device.laptop} and (orientation: landscape) {
    border-width: 10px;
  }
  @media screen and ${device.laptopM} and (orientation: landscape) {
    border-width: 15px;
  }
`;
