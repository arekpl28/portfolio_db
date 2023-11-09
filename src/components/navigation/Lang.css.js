import styled from "styled-components";

export const Lg = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 50px;
  line-height: 2.5;
  text-decoration: none;
  color: ${({ theme }) => theme.text.color};
  transition: 0.6s;
  outline: 0;
  img {
    width: 2rem;
    justify-self: center;
    align-self: center;
    padding-right: 10px;
    cursor: pointer;
  }
`;
