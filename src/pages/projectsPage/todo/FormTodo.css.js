import styled from "styled-components";
import { Input } from "../../../components/Input.css";
import { Button } from "../../../components/Button.css";
import { device } from "../../../utils/variables";

export const Form = styled.form`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;
export const DivInput = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  @media screen and ${device.laptop} {
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr;
  }
`;
export const InputTodo = styled(Input)`
  border-radius: 0.55rem;
  width: 100%;
`;
export const ButtonTodo = styled(Button)`
  outline: none;
`;
export const DivSelect = styled.div`
  display: grid;
  font-size: 0.875rem;
  width: 100%;
  padding-top: 0.8rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  font-weight: 300;
`;
export const Label = styled.label`
  justify-self: start;
  margin-bottom: 0.25rem;
`;
export const Select = styled.select`
  font-family: "Nunito", sans-serif;
  appearance: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  font-weight: 300;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.text.color};
  box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({ theme }) => theme.text.color} 50%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.text.color} 50%,
      transparent 50%
    ),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  outline: none;
  &:focus {
    box-shadow: ${({ theme }) => theme.box_shadow_in.small};
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
`;
