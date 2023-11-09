import styled from "styled-components";

// import img_clock_png from "../../../img/clock_png.png";
import img_clock_png from "../../../img/png/clock.png";

export const DivWrapper = styled.div`
  padding: 1rem;
  height: 30vw;
  width: 30vw;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
  @media screen and (max-width: 500px) and (orientation: portrait) {
    height: 70vw;
    width: 70vw;
  }
`;

export const DivClock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgc};
`;

export const Clock = styled.div`
  display: flex;
  position: relative;
  width: 20vw;
  height: 20vw;
  justify-content: center;
  align-items: center;
  background: url("${img_clock_png}");
  background-size: cover;
  border: 4px solid ${({ theme }) => theme.colors.bgc};
  box-shadow: 0 -1vw 1vw rgba(255, 255, 255, 0.05),
    inset 0 -1vw 1vw rgba(255, 255, 255, 0.05), 0 1vw 1vw rgba(0, 0, 0, 0.05),
    inset 0 1vw 1vw rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 1.2vw;
    height: 1.2vw;
    background-color: red;
    border-radius: 50%;
    z-index: 1000;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    height: 50vw;
    width: 50vw;
  }
`;

export const Hour = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Hr = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  height: 50%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    width: 4%;
    height: 50%;
    background-color: ${({ theme }) => theme.text.color_hover};
    border-radius: 6px 6px 0 0;
    z-index: 10;
  }
`;

export const Minute = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Min = styled.div`
  display: flex;
  position: absolute;
  width: 60%;
  height: 60%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 2%;
    height: 50%;
    background-color: #fff;
    border-radius: 4px 4px 0 0;
    z-index: 11;
  }
`;

export const Second = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Sec = styled.div`
  position: absolute;
  display: flex;
  width: 75%;
  height: 75%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 1%;
    height: 65%;
    background-color: red;
    border-radius: 2px 2px 0 0;
    z-index: 12;
  }
`;
