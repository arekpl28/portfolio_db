import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { DataContext } from "../../context/DataProvider";

import { device } from "../../utils/variables";

// import img_maintenance from "../../img/maintenance.jpg";
import australia_flag from "../../img/png/australia.png";
import czech_republic_flag from "../../img/png/czech_republic.png";
import denmark_flag from "../../img/png/denmark.png";
import germany_flag from "../../img/png/germany.png";
import ireland_flag from "../../img/png/ireland.png";
import norway_flag from "../../img/png/norway.png";
import poland_flag from "../../img/png/poland.png";
import portugal_flag from "../../img/png/portugal.png";
import singapore_flag from "../../img/png/singapore.png";
import slovakia_flag from "../../img/png/slovakia.png";
import south_korea_flag from "../../img/png/south_korea.png";
import spain_flag from "../../img/png/spain.png";
import sweden_flag from "../../img/png/sweden.png";
import thailand_flag from "../../img/png/thailand.png";
import united_kingdom_flag from "../../img/png/united_kingdom.png";
import united_states_flag from "../../img/png/united_states.png";

const countries_flag = [
  {
    id: 0,
    name: "australia",
    src: australia_flag,
  },
  {
    id: 1,
    name: "czech_republic",
    src: czech_republic_flag,
  },
  {
    id: 2,
    name: "denmark",
    src: denmark_flag,
  },
  {
    id: 3,
    name: "germany",
    src: germany_flag,
  },
  {
    id: 4,
    name: "ireland",
    src: ireland_flag,
  },
  {
    id: 5,
    name: "norway",
    src: norway_flag,
  },
  {
    id: 6,
    name: "poland",
    src: poland_flag,
  },
  {
    id: 7,
    name: "portugal",
    src: portugal_flag,
  },
  {
    id: 8,
    name: "singapore",
    src: singapore_flag,
  },
  {
    id: 9,
    name: "slovakia",
    src: slovakia_flag,
  },
  {
    id: 10,
    name: "south_korea",
    src: south_korea_flag,
  },
  {
    id: 11,
    name: "spain",
    src: spain_flag,
  },
  {
    id: 12,
    name: "sweden",
    src: sweden_flag,
  },
  {
    id: 13,
    name: "thailand",
    src: thailand_flag,
  },
  {
    id: 14,
    name: "united_kingdom",
    src: united_kingdom_flag,
  },
  {
    id: 15,
    name: "united_states",
    src: united_states_flag,
  },
];

// const ImgStyle = styled.img`
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;
const WrapperDiv = styled.div`
  width: 100%;
  // background-color: ${({ theme }) => theme.colors.bgc};
`;
const H2Styled = styled.h2`
  font-size: 1.5rem;
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 2rem;
    padding: 40px;
  }
`;
const SectionStyled = styled.section``;
const ArticleStyled = styled.article`
  display: grid;
  grid-template-columns: 80%;
  grid-template-rows: auto auto;
  justify-content: center;
  align-content: center;
  @media screen and (orientation: landscape) {
    grid-template-columns: 200px 200px;
    grid-template-rows: auto;
    align-item: start;
    gap: 20px;
  }
  @media screen and ${device.surface} {
    grid-template-columns: 250px 250px;
  }
  @media screen and ${device.surface} and (orientation: portrait) {
    grid-template-columns: 200px 200px;
    grid-template-rows: auto;
    align-item: start;
    gap: 20px;
  }

  @media screen and ${device.tablet} {
    grid-template-columns: 300px 300px;
  }
`;
const InfoStylde = styled.div``;
const H3Styled = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 20px;
  @media screen and (orientation: landscape) {
    text-align: left;
  }
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 1.5rem;
  }
`;
const TextStyled = styled.p`
  text-align: center;
  font-size: 0.8rem;
  // text-align: justify;
  padding-bottom: 20px;
  @media screen and (orientation: landscape) {
    text-align: left;
  }
  @media screen and ${device.tablet} and (min-height: 710px) {
    font-size: 1.2rem;
  }
`;
const DivBorder = styled.div`
  margin: 20px auto;
  width: 80%;
  border-bottom: 1px solid white;
`;
const BoxStylde = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 40px);
  padding: 10px 0;
  justify-content: space-between;
  @media screen and (orientation: landscape) {
    padding: 0;
  }
  @media screen and ${device.tablet} and (min-height: 710px) {
    grid-template-columns: repeat(auto-fill, 70px);
    padding: 0;
  }
  // align-content: center;
`;
const DivFlag = styled.div`
  position: relative;
  padding: 0px;
  img {
    width: 100%;
  }
  p {
    display: none;
  }
  &:hover p {
    position: absolute;
    display: block;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.bgc};
    text-align: center;
    font-size: 0.5rem;
    padding: 5px 0;
    cursor: pointer;
    @media screen and ${device.tablet} and (min-height: 710px) {
      font-size: 0.8rem;
    }
  }
`;

export default function AboutPageContent(props) {
  const { setPath, t } = useContext(DataContext);

  useEffect(() => {
    setPath(props.match.path);
  }, [props.match.path, setPath]);

  const countries = countries_flag.map((country) => (
    <DivFlag key={country.id}>
      <img src={country.src} alt={t(`${country.name}`)}></img>
      <p>{t("Flag." + country.name)}</p>
    </DivFlag>
  ));

  return (
    <>
      <WrapperDiv>
        {/* <ImgStyle src={img_maintenance} className alt="maintenance"></ImgStyle> */}
        <H2Styled>{t("AboutPage.title")}</H2Styled>
        <SectionStyled>
          <ArticleStyled>
            <InfoStylde>
              <H3Styled>{t("Flag.title")}</H3Styled>
              <TextStyled>{t("Flag.text")}</TextStyled>
            </InfoStylde>
            <BoxStylde>{countries}</BoxStylde>
          </ArticleStyled>
          <DivBorder></DivBorder>
        </SectionStyled>
      </WrapperDiv>
    </>
  );
}
