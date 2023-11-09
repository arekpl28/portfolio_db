import React, { useContext } from "react";

import NavigationList from "../navigation/NavigationListItem";
import SocialMedia from "../SocialMedia";
import { DataContext } from "../../context/DataProvider";

import { SOCIAL_MEDIA, ICONS, CONTACT } from "../../utils/constant";

import {
  H4,
  H5,
  Wrapper,
  Div,
  Wrap,
  Content,
  LogoFooter,
  Contact,
  DivContentWrapper,
  Info,
  Menu,
  NavFooter,
  Subscribe,
  InputFooter,
  ButtonFooter,
  DivWrapperSocialMedia,
} from "./Footer.css";

export default function Footer() {
  const { scrollTop, t } = useContext(DataContext);
  return (
    <>
      <Wrapper>
        <Div>
          <LogoFooter onClick={scrollTop} exact to="/">
            Logo
          </LogoFooter>
          <Wrap>
            <Content>
              <DivContentWrapper>
                <Contact>
                  <H4>{t("Contact_info")}</H4>
                  <Info
                    target="blank"
                    href="https://www.google.com/maps/place/Lillehammer/@61.1153437,10.4618682,15.75z/data=!4m5!3m4!1s0x466a62a7f7b5288d:0x32273ad34a5bed34!8m2!3d61.1152713!4d10.4662306"
                  >
                    <i className={ICONS.MAP}></i>
                    <div>
                      <H5>{t("Address")}</H5>
                      <p>{t("Norway")}</p>
                    </div>
                  </Info>
                  <Info href={SOCIAL_MEDIA.TELEFON}>
                    <i className={ICONS.PHONE}></i>
                    <div>
                      <H5>{t("Phone")}</H5>
                      <p>{CONTACT.PHONE}</p>
                    </div>
                  </Info>
                  <Info href={SOCIAL_MEDIA.EMAIL}>
                    <i className={ICONS.EMAIL}></i>
                    <div>
                      <H5>{t("Email")}</H5>
                      <p>{CONTACT.EMAIL}</p>
                    </div>
                  </Info>
                </Contact>
              </DivContentWrapper>
              <DivContentWrapper>
                <Menu>
                  <H4>Menu</H4>
                  <NavFooter>
                    <NavigationList></NavigationList>
                  </NavFooter>
                </Menu>
              </DivContentWrapper>
              <DivContentWrapper>
                <Subscribe>
                  <H4>{t("Subscribe_info")}</H4>
                  <InputFooter
                    placeholder={t("Enter_your_email")}
                    type="email"
                  />
                  <ButtonFooter>{t("Subscribe")}</ButtonFooter>
                </Subscribe>
              </DivContentWrapper>
            </Content>
            <DivWrapperSocialMedia>
              <SocialMedia></SocialMedia>
            </DivWrapperSocialMedia>
          </Wrap>
        </Div>
      </Wrapper>
    </>
  );
}
