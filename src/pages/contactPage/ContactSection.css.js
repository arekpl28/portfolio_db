import styled from "styled-components";
import { device } from "../../utils/variables";
import { Button } from "../../components/Button.css";
import { Input } from "../../components/Input.css";

export const Contact = styled.div`
  display: grid;
  grid-template-rows: 50vh 1fr;
  width: 100%;
  column-gap: 20px;
  padding-top: 20px;

  @media screen and (min-width: 500px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and ${device.laptopM} {
    padding: 20px 80px;
  }
`;
export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const DivContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.box_shadow_out.large};
`;

export const Form = styled.form`
  @media screen and (orientation: portrait) {
    padding-top: 30px;
  }
`;
export const DivLabel = styled.div`
  display: grid;
  width: 100%;
  line-height: 1.5;
  font-weight: 300;
  font-size: 0.875rem;
  padding-top: 10px;
  margin-bottom: 1rem;

  &:nth-child(1) {
    padding-top: 0px;
  }
`;
export const Label = styled.label`
  margin-bottom: 0.25rem;
`;
export const DivInput = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
`;
export const InputContact = styled(Input)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill:hover {
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const DivIcon = styled.div`
  display: grid;
  width: 100%;
  padding: 0 10px;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.color};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${({ theme }) => theme.colors.bgc_icon};
`;
export const DivTextArea = styled(DivLabel)``;
export const TextArea = styled.textarea`
  font-family: "Nunito", sans-serif;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.6rem 0.75rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text.color};
  box-shadow: ${({ theme }) => theme.box_shadow_in.small};
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: transparent;
`;
export const BtnSubmit = styled(Button)`
  margin-top: 10px;
  cursor: poiter;
  color: ${({ theme }) => theme.text.color};
`;
export const AlertsStyle = styled.span`
  padding-left: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.color_hover};
`;
