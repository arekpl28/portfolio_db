import styled from "styled-components";
import { Button } from "../../../components/Button.css";
import { device } from "../../../utils/variables";

export const DivTodo = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr min-content min-content;
  margin: 5px 5px 1rem 5px;
  font-size: 1.5rem;
  transition: all 0.5s ease;
  border: none;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;
export const Number = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 0.8rem;
  padding: 0.35rem 0.35rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0.06rem solid rgba(199, 199, 199, 0.2);
  color: #868686;
  &.completed {
    text-decoration: line-through;
    text-decoration-color: red;
  }
  @media screen and ${device.laptop} {
  }
`;
export const Li = styled.li`
  font-family: "Nunito", sans-serif;
  width: 100%;
  font-size: 0.8rem;
  padding: 0.35rem 0.35rem;
  font-weight: 300;
  background-color: transparent;
  border: none;
  outline: none;
  color: #03a9f4;
  &.completed {
    text-decoration: line-through;
    opacity: 0.5;
    text-decoration-color: red;
  }
`;
const Btn = styled(Button)`
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  justify-self: right;
  box-shadow: none;
`;
export const BtnComplete = styled(Btn)`
  color: green;
  border-radius: 0px;
  border-right: 0.06rem solid rgba(199, 199, 199, 0.2);
  border-left: 0.06rem solid rgba(199, 199, 199, 0.2);
  i.completed {
    opacity: 0.5;
    color: orange;
  }
`;
export const BtnTrash = styled(Btn)`
  color: red;
`;
