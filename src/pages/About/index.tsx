import React from "react";

import { Container, AboutText, TechList, Link } from "./styles";
import { MainTitle, Divider } from "../../styles";

const About: React.FC = () => {
  return (
    <Container>
      <MainTitle>Sobre</MainTitle>
      <Divider />
      <AboutText>
        <p>
          Natural de Rio Negro - PR, atualmente vivendo em Mafra/Curitiba.{" "}
          <br /> <br />
          Bacharel em Sistemas de Informação pela UnC - Universidade do
          Contestado, trabalho com desenvolvimento de software desde o final de
          2018. Sempre tive um enorme apreço pela área de TI, tendo completado
          um curso técnico em Redes de Computadores ainda na época do Ensino
          Médio (2013), entretando, foi a área de desenvolvimento de software
          que me despertou o maior interesse, fazendo com que grande parte do
          conhecimento e toda a experiência obtidos até hoje estejam voltados a
          ela. <br /> <br />
          Por conta do grande interesse, consegui me destacar bastante durante a
          faculdade, sendo destaque das duas principais disciplinas da grade
          (Projeto Integrador e TCC), obtendo nota máxima em ambos os projetos
          apresentados. <br /> <br />
          Atualmente atuando como Analista de Sistemas, podendo por em prática
          grande parte do conhecimento obtido durante a graduação e tendo a
          oportunidade de adquirir cada vez mais experiência. <br /> <br />
          Meu foco principal é o desenvolvimento WEB, tendo como as principais
          habilidades:
        </p>
        <TechList>
          <li>Javascript (ReactJS, NodeJS, Typescript)</li>
          <li>PHP (Laravel)</li>
          <li>Docker</li>
          <li>Gitlab CI</li>
          <li>Servless (AWS Lambda, Serverless Framework)</li>
          <li>AWS (ECS, EKS, S3, CLOUDFRONT)</li>
          <li>Orientação a objetos</li>
          <li>Prinícipios SOLID</li>
          <li>Testes Unitários e TDD</li>
          <li>Clean Architecture</li>
        </TechList>
        <p>
          A seção <Link to="/skills">Skills</Link> conta com uma explicação
          muito mais detalhada sobre a experiência em cada um dos tópicos
          citados acima.
        </p>
      </AboutText>
    </Container>
  );
};

export default About;
