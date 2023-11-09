import { FaArrowCircleUp } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
  `;

export const ScrollTop = styled(FaArrowCircleUp)`
  position: fixed;
  font-size: 2.5rem;
  right: 30px;
  bottom: 70px;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.6s;
  transition: opacity 0.4s;
  opacity: 0.5;
  color: orange;
  &:hover {
    opacity: 1;
  }
`;
