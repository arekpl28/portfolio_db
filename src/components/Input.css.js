import styled from "styled-components";

export const Input = styled.input`
  font-family: "Nunito", sans-serif;
  width: 100%;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  font-weight: 300;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  color: ${({ theme }) => theme.text.color};
`;
