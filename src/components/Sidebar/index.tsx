import React, { memo } from "react";

import profilePic from "../../assets/profile.jpg";
import InfoIcon from "@material-ui/icons/Info";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import { Link } from "@material-ui/core";
import {
  Container,
  Avatar,
  PersonalInfo,
  MainInfo,
  InfoList,
  InfoListSection,
  InfoListTitle,
  InfoListSectionContent,
  Divider,
} from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <MainInfo>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            style={{ width: "140px", height: "140px" }}
            src={profilePic}
          />
        </div>
        <PersonalInfo>
          <h3>João Guilherme Berti Sczip</h3>
        </PersonalInfo>
      </MainInfo>
      <InfoList>
        <InfoListSection>
          <InfoListTitle>
            <Link href="#" color="inherit">
              Sobre
            </Link>
            <InfoIcon style={{ fontSize: "28px" }} />
          </InfoListTitle>
          <Divider />
          <InfoListSectionContent>
            <li>24 anos</li>
            <li>Desenvolvedor de software</li>
            <li>Bacharel em Sistemas de Informação</li>
            <li>Mafra - SC</li>
          </InfoListSectionContent>
        </InfoListSection>
        <InfoListSection>
          <InfoListTitle>
            <Link href="#" color="inherit">
              Experiências
            </Link>
            <CodeIcon style={{ fontSize: "28px" }} />
          </InfoListTitle>
          <Divider />
          <InfoListSectionContent>
            <li>BIP Carros - Analista de Sistemas</li>
            <li>UnC - Desenvolver Web</li>
            <li>Freelancer</li>
          </InfoListSectionContent>
        </InfoListSection>
        <InfoListSection>
          <InfoListTitle>
            <Link href="#" color="inherit">
              Formação Acadêmica
            </Link>
            <SchoolIcon style={{ fontSize: "28px" }} />
          </InfoListTitle>
          <Divider />
          <InfoListSectionContent>
            <li>Universidade do Contestado - UnC</li>
            <li>Campus Mafra - SC</li>
            <li>Ano de conclusão: 2020</li>
          </InfoListSectionContent>
        </InfoListSection>
        <InfoListSection>
          <InfoListTitle>
            <Link href="#" color="inherit">
              Mais
            </Link>
            <AddCircleIcon style={{ fontSize: "28px" }} />
          </InfoListTitle>
          <Divider />
          <InfoListSectionContent>
            <li>Projetos</li>
            <li>Contato</li>
          </InfoListSectionContent>
        </InfoListSection>
      </InfoList>
    </Container>
  );
};

export default memo(Sidebar);
