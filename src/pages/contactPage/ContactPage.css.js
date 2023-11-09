import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.bgc};
`;
