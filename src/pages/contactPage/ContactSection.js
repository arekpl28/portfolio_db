import React, { useContext } from "react";

import useForm from "./useForm";
import validateForm from "./validateForm";

import { DataContext } from "../../context/DataProvider";
import { SOCIAL_MEDIA, ICONS } from "../../utils/constant";

import {
  Contact,
  Map,
  DivIcon,
  InputContact,
  DivContentWrapper,
  MapWrapper,
  Form,
  DivLabel,
  Label,
  DivInput,
  TextArea,
  DivTextArea,
  BtnSubmit,
  AlertsStyle,
} from "./ContactSection.css";

export default function ContactSection() {
  const { t } = useContext(DataContext);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    messageSend,
    messageNotSend,
  } = useForm(validateForm);

  return (
    <>
      <Contact>
        <MapWrapper>
          <Map src={SOCIAL_MEDIA.MAP} title="google maps"></Map>
        </MapWrapper>
        <DivContentWrapper>
          <Form onSubmit={handleSubmit} noValidate>
            <DivLabel>
              <Label htmlFor="name">
                {t("Name")}
                {errors.name && (
                  <AlertsStyle>{t("Form." + errors.name)}</AlertsStyle>
                )}
              </Label>
              <DivInput>
                <InputContact
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                />
                <DivIcon>
                  <i className={ICONS.USER}></i>
                </DivIcon>
              </DivInput>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="email">
                {t("Email")}
                {errors.email && (
                  <AlertsStyle>{t("Form." + errors.email)}</AlertsStyle>
                )}
              </Label>
              <DivInput>
                <InputContact
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                />
                <DivIcon>
                  <i className={ICONS.EMAIL}></i>
                </DivIcon>
              </DivInput>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="phone">{t("Phone")} </Label>
              <DivInput>
                <InputContact
                  onChange={handleChange}
                  id="phone"
                  name="phone"
                  type="text"
                  value={values.phone}
                />
                <DivIcon>
                  <i className={ICONS.PHONE}></i>
                </DivIcon>
              </DivInput>
            </DivLabel>
            <DivTextArea>
              <Label htmlFor="message">
                {t("Message")}
                {errors.message && (
                  <AlertsStyle>{t("Form." + errors.message)}</AlertsStyle>
                )}
              </Label>
              <DivInput>
                <TextArea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                ></TextArea>
                <DivIcon>
                  <i className={ICONS.PENCIL}></i>
                </DivIcon>
              </DivInput>
            </DivTextArea>
            <BtnSubmit type="submit">{t("Submit")}</BtnSubmit>
            {messageSend ? (
              <AlertsStyle>{t("Form.message_sent")}</AlertsStyle>
            ) : null}
            {messageNotSend ? alert(t("Form.message_not_sent")) : null}
          </Form>
        </DivContentWrapper>
      </Contact>
    </>
  );
}
