import React from "react";

import { Container, AboutText } from "./styles";
import { MainTitle, Divider } from "../../styles";

const Experiences: React.FC = () => {
  return (
    <Container>
      <MainTitle>Experiências</MainTitle>
      <Divider />
      <AboutText>
        <p>Minhas Experiences</p>
      </AboutText>
    </Container>
  );
};

export default Experiences;
