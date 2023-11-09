import React from "react";

import {
  DivCard,
  Icon,
  ImgBox,
  ContentBox,
  H5Title,
  Description,
  DivLink,
  LinkCard,
  DivBox,
} from "./Card.css";

export default function Card({
  aos,
  icon,
  title,
  description,
  linkTitle,
  href,
}) {
  return (
    <>
      <DivCard data-aos={aos}>
        <ImgBox>
          <Icon className={icon}></Icon>
        </ImgBox>
        <DivBox>
          <ContentBox>
            <H5Title>{title}</H5Title>
            <Description>{description}</Description>
          </ContentBox>
          <DivLink>
            <LinkCard href={href}>{linkTitle}</LinkCard>
          </DivLink>
        </DivBox>
      </DivCard>
    </>
  );
}
