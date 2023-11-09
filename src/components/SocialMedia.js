import React from "react";
import { SOCIAL_MEDIA, ICONS } from "../utils/constant";
import { SocialIcons } from "./SocialMedia.css";

const social = [
  {
    id: 0,
    iconName: ICONS.FACEBOOK,
    href: SOCIAL_MEDIA.FACEBOOK,
    target: "blank",
  },
  {
    id: 1,
    iconName: ICONS.INSTAGRAM,
    href: SOCIAL_MEDIA.INSTAGRAM,
    target: "blank",
  },
  {
    id: 2,
    iconName: ICONS.GITHUB,
    href: SOCIAL_MEDIA.GITHUB,
    target: "blank",
  },
  {
    id: 3,
    iconName: ICONS.LINKEDIN,
    href: SOCIAL_MEDIA.LINKEDIN,
    target: "blank",
  },
  {
    id: 4,
    iconName: ICONS.EMAIL,
    href: SOCIAL_MEDIA.EMAIL,
  },
  {
    id: 5,
    iconName: ICONS.PHONE,
    href: SOCIAL_MEDIA.TELEFON,
  },
];

export default function SocialMedia() {
  const socialList = social.map((item) => (
    <SocialIcons key={item.id} target={item.target} href={item.href}>
      <i className={item.iconName}></i>
    </SocialIcons>
  ));
  return <>{socialList}</>;
}
