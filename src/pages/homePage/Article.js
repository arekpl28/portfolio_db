import React, { useContext, useEffect } from "react";

// import { DataContext } from "../../../context/DataProvider";
import { DataContext } from "../../context/DataProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdPhoneIphone, MdUpdate } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import {
  SiHtml5,
  SiStyledComponents,
  SiJavascript,
  SiReact,
  SiGithub,
  SiGoogletranslate,
  SiUdemy,
  SiVisualstudiocode,
  SiYoutube,
} from "react-icons/si";

import {
  ArticleStyle,
  IconBox,
  ContentBox,
  H5Title,
  Description,
  LinkHomePage,
} from "./Article.css";

const homeList = [
  {
    id: 0,
    icon: <SiHtml5 />,
    title: "Html 5",
    description: "Home_Page.html5",
    href: "https://www.udemy.com/certificate/UC-DSKKTAP6/",
    aos1: "fade-right",
    aos3: "fade-right",
  },
  {
    id: 1,
    icon: <SiStyledComponents />,
    title: "Styled Component",
    description: "Home_Page.css",
    href: "https://www.udemy.com/certificate/UC-ZYMBG0CZ/",
    aos1: "fade-left",
    aos3: "fade-up",
  },
  {
    id: 2,
    icon: <SiJavascript />,
    title: "Java Script",
    description: "Home_Page.java_script",
    href: "https://www.udemy.com/certificate/UC-8IOM9RG2/",
    aos1: "fade-right",
    aos3: "fade-left",
  },
  {
    id: 3,
    icon: <SiReact />,
    title: "React",
    description: "Home_Page.react",
    href: "https://www.udemy.com/certificate/UC-KH050YQH/",
    aos1: "fade-left",
    aos3: "fade-right",
  },
  {
    id: 4,
    icon: <MdPhoneIphone />,
    title: "Mobile First",
    description: "Home_Page.mobile_first",
    href: null,
    aos1: "fade-right",
    aos3: "fade-up",
  },
  {
    id: 5,
    icon: <SiGithub />,
    title: "GitHub",
    description: "Home_Page.github",
    href: "https://www.udemy.com/certificate/UC-8AGMHZCW/",
    aos1: "fade-left",
    aos3: "fade-left",
  },
  {
    id: 6,
    icon: <SiGoogletranslate />,
    title: "Multilingual website",
    description: "Home_Page.multilingual",
    href: null,
    aos1: "fade-right",
    aos3: "fade-right",
  },
  {
    id: 7,
    icon: <SiUdemy />,
    title: "Udemy",
    description: "Home_Page.udemy",
    href: null,
    aos1: "fade-left",
    aos3: "fade-up",
  },
  {
    id: 8,
    icon: <SiVisualstudiocode />,
    title: "Visual Studio Code",
    description: "Home_Page.vsc",
    href: null,
    aos1: "fade-right",
    aos3: "fade-left",
  },
  {
    id: 9,
    icon: <SiYoutube />,
    title: "YouTube",
    description: "Home_Page.youtube",
    href: null,
    aos1: "fade-left",
    aos3: "fade-right",
  },
  {
    id: 10,
    icon: <GiFishingHook />,
    title: "React Hooks",
    description: "Home_Page.hooks",
    href: null,
    aos1: "fade-right",
    aos3: "fade-up",
  },
  {
    id: 11,
    icon: <CgWebsite />,
    title: "More in Website",
    description: "Home_Page.website",
    href: null,
    aos1: "fade-left",
    aos3: "fade-left",
  },
  {
    id: 12,
    icon: <MdUpdate />,
    title: "Update on Website",
    description: "Home_Page.update",
    href: null,
    aos1: "fade-right",
    aos3: "fade-right",
  },
];

const Article = () => {
  const { t, viewportWidth } = useContext(DataContext);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const listHome = homeList.map((item) => (
    <ArticleStyle
      data-aos={viewportWidth < 1279 ? item.aos1 : item.aos3}
      key={item.id}
    >
      <IconBox>{item.icon}</IconBox>
      <ContentBox>
        <H5Title>{item.title}</H5Title>
        <Description>{t(item.description)}</Description>
        {item.href ? (
          <LinkHomePage
            target="blank"
            href="https://www.udemy.com/certificate/UC-DSKKTAP6/"
          >
            {t("Certificate")}
          </LinkHomePage>
        ) : null}
      </ContentBox>
    </ArticleStyle>
  ));
  return <>{listHome}</>;
};

export default Article;
