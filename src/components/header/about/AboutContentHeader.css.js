import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;

export const Name = styled.h1`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7vw;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.3);
  @media screen and (orientation: landscape) {
    font-size: 6vw;
  }
`;
