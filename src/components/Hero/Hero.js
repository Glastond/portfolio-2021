import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My purpose is to create beautiful apps that add value to peoples life,
        learn new things and interact with interesting people in this process.
      </SectionText>
      <Button
        onClick={() => {
          window.open("https://google.com", "_blank");
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
