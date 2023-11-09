import styled from "styled-components";
import { Logo } from "./Logo.css";
import { device } from "../../utils/variables";

export const DivDark = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(20px);
  z-index: 0;
  transition: 0.3s;
`;

export const Line = styled.div``;

export const Burger = styled.div`
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
  ${Line} {
    width: 25px;
    height: 2px;
    margin-bottom: 7px;
    transform-origin: center right;
    background-color: ${({ theme }) => theme.colors.bgcBurger};
    transition: all 0.3s ease;
    &.about {
      background-color: ${({ theme }) => theme.colors.bgcBurgerSticky};
    }
    &:nth-child(3) {
      margin-bottom: 0px;
    }
  }
  &.burgerActive ${Line} {
    background-color: ${({ theme }) => theme.colors.bgcBurgerActive};
    &:nth-child(1) {
      transform: rotate(-45deg);
    }
    &:nth-child(2) {
      transform: rotate(0deg);
      background-color: transparent;
    }
    &:nth-child(3) {
      transform: rotate(45deg);
    }
  }
  @media screen and (min-width: 710px) {
    display: none;
  }
`;

export const Language = styled.div`
  display: grid;
  position: fixed;
  grid-template-columns: min-content;
  grid-template-rows: min-content min-content min-content;
  right: 30px;
  top: 29px;
  transition: 0.6s;
`;

export const ImgStyle = styled.div`
  display: none;
  @media screen and (min-width: 710px) {
    display: none;
    &:nth-child(1) {
      display: none;
      order: 2;
    }
    &:nth-child(2) {
      display: none;
      order: 2;
    }
    &:nth-child(3) {
      display: none;
      order: 2;
    }
    img {
      width: 20px;
      cursor: pointer;
    }
    &.visible {
      order: 1;
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  padding: 20px 40px 20px 20px;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  z-index: 10000;
  @media screen and (min-width: 710px) {
    &.about ul li a {
      color: black;
      &:hover {
        color: green;
      }
      &.active {
        color: red;
      }
    }
  }
  @media screen and ${device.tablet} and (orientation: portrait) {
    padding: 30px;
    height: unset;
    ${Language} {
      top: 44px;
    }
  }
  @media screen and ${device.laptop} {
    padding: 30px 40px 30px 30px;
    ${Language} {
      top: 28px;
    }
  }
  @media screen and ${device.laptop} and (orientation: portrait) {
    padding: 30px 40px;
    ${Language} {
      top: 44px;
    }
  }
  @media screen and ${device.laptopM} {
    padding: 40px;
    ${Language} {
      top: 30px;
    }
  }
  @media screen and ${device.desktop} {
    padding: 50px;
    ${Language} {
      top: 44px;
    }
  }
  &.sticky {
    height: 50px;
    padding: 10px 40px 10px 20px;
    background-color: #eee;
    box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
    ${Language} {
      top: 15px;
    }
    @media screen and (max-width: 710px) {
      & ul {
        top: 50px;
        height: calc(100vh - 50px);
        padding-top: 30px;
      }
    }
    @media screen and (min-width: 710px) {
      &.about ul li a {
        color: black;
        &:hover {
          color: green;
        }
        &.active {
          color: red;
        }
      }
      ul li a {
        color: rgb(30, 30, 30);
        font-size: 0.9rem;
        &:hover {
          color: green;
        }
        &.active {
          color: red;
        }
      }
    }
    @media screen and ${device.tablet} and (orientation: portrait) {
      height: unset;
    }
    @media screen and ${device.laptop} {
      ${Language} {
        top: 14px;
      }
    }
    @media screen and ${device.laptopM} {
      padding: 30px 40px;
      ${Language} {
        top: 20px;
      }
    }

    & ${Burger} ${Line} {
      width: 20px;
      margin-bottom: 5px;
      background-color: ${({ theme }) => theme.colors.bgcBurgerSticky};
      &:nth-child(3) {
        margin-bottom: 0px;
      }
    }
    & ${Burger}.burgerActive ${Line} {
      background-color: ${({ theme }) => theme.colors.bgcBurgerActive};
      &:nth-child(1) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        transform: rotate(0deg);
        background-color: transparent;
      }
      &:nth-child(3) {
        transform: rotate(45deg);
      }
    }
    & ${Logo} {
      @media screen and (orientation: portrait) {
        font-size: 1.5rem;
      }
      @media screen and (orientation: landscape) and (max-height: 500px) {
        font-size: 1.3rem;
      }
      @media screen and (orientation: landscape) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const NavUl = styled.ul`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 50px) repeat(3, min-content);
  text-align: center;
  height: 100vh;
  width: 65vw;
  top: 0px;
  right: 0px;
  padding-top: 80px;
  background-color: rgb(30, 30, 30);
  transform: translateX(100%);
  transition: 0.3s;
  &.navActive {
    transition: 0.3s;
    transform: translateX(0);
    overflow: scroll;
  }
  @media screen and (min-width: 710px) {
    display: flex;
    position: relative;
    transform: translateX(0%);
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 100%;
    width: unset;
    padding-top: unset;
    padding-right: 30px;
  }
`;
