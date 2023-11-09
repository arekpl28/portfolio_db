import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import SocialMedia from "../../SocialMedia";
import arekImg from "../../../img/arek.jpg";

import { DESCRIPTION } from "../../../utils/constant";

import {
  Wrapper,
  Name,
  Profession,
  DivMedia,
  DivProfileImg,
} from "./HomeContentHeader.css";

export default function HomeContentHeader() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Wrapper>
        <Name data-aos="fade-left">Arkadiusz Plumbaum</Name>
        <Profession data-aos="fade-right">{DESCRIPTION.JUNIOR}</Profession>
        <DivMedia>
          <SocialMedia></SocialMedia>
        </DivMedia>
      </Wrapper>
      <DivProfileImg>
        <img src={arekImg} alt="Pictuer of Arkadiusz Plumbaum" />
      </DivProfileImg>
    </>
  );
}
