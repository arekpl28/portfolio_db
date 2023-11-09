import React, { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataProvider";

import ContactCard from "./ContactCard";
import ContactSection from "./ContactSection";

import { Wrapper } from "./ContactPage.css";

export default function ContactPage(props) {
  const { setPath } = useContext(DataContext);
  useEffect(() => {
    setPath(props.match.path);
  }, [props.match.path, setPath]);
  return (
    <>
      <Wrapper>
        <ContactCard></ContactCard>
        <ContactSection></ContactSection>
      </Wrapper>
    </>
  );
}
