import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Name = styled.h1`
  position: absolute;
  width: 100%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7vw;
  font-weight: 600;
  @media screen and (orientation: landscape) {
    font-size: 6vw;
  }
`;
