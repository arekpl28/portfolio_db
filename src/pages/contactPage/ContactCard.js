import React, { useContext, useLayoutEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { DataContext } from "../../context/DataProvider";
import Card from "./Card";

import { SOCIAL_MEDIA, ICONS, CONTACT } from "../../utils/constant";

import { CardContainer } from "./ContactCard.css";

const card = [
  {
    id: 0,
    icon: ICONS.SMARTPHONE,
    title: "Phone",
    description: CONTACT.PHONE,
    linkTitle: "Call",
    href: SOCIAL_MEDIA.TELEFON,
    aos1: "fade-right",
    aos3: "fade-right",
  },
  {
    id: 1,
    icon: ICONS.MAP,
    title: "Address",
    description: "Lillehammer Norway",
    linkTitle: "Map",
    href: "https://www.google.pl/maps/@61.1208869,10.4273293,13z",
    aos1: "fade-left",
    aos3: "fade-up",
  },
  {
    id: 2,
    icon: ICONS.EMAIL,
    title: "Email",
    description: CONTACT.EMAIL,
    linkTitle: "Message",
    href: SOCIAL_MEDIA.EMAIL,
    aos1: "fade-right",
    aos3: "fade-left",
  },
];

const ContactCard = () => {
  const { t, viewportWidth } = useContext(DataContext);
  useLayoutEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const cardList = card.map((item) => (
    <Card
      key={item.id}
      icon={item.icon}
      title={t(item.title)}
      description={item.description}
      linkTitle={t(item.linkTitle)}
      href={item.href}
      aos={viewportWidth < 540 ? item.aos1 : item.aos3}
    ></Card>
  ));
  return (
    <>
      <CardContainer>{cardList}</CardContainer>
    </>
  );
};

export default ContactCard;
