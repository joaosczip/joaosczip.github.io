import React, { memo } from "react";

import profilePic from "../../assets/profile.jpg";
import InfoIcon from "@material-ui/icons/Info";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import {
  Container,
  Avatar,
  Link,
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
          <div>
            <a
              href="https://github.com/joaosczip"
              target="__blank"
              title="Perfil GitHub"
              style={{ color: "#fff" }}
            >
              <GitHubIcon style={{ fontSize: "32px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/joaosczip/"
              target="__blank"
              title="Perfil LinkedIn"
              style={{ color: "#fff" }}
            >
              <LinkedInIcon style={{ fontSize: "34px" }} />
            </a>
            <a
              href="https://portfolio-sczip.s3.amazonaws.com/CV_Joao_Guilherme.pdf"
              title="Download Currículo em PDF"
              style={{ color: "#fff" }}
            >
              <InsertDriveFileIcon style={{ fontSize: "34px" }} />
            </a>
          </div>
        </PersonalInfo>
      </MainInfo>
      <InfoList>
        <InfoListSection>
          <InfoListTitle>
            <Link to="/" color="inherit">
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
            <Link to="/experiences" color="inherit">
              Experiências
            </Link>
            <CodeIcon style={{ fontSize: "28px" }} />
          </InfoListTitle>
          <Divider />
          <InfoListSectionContent>
            <li>BIP Carros - Analista de Sistemas (Atual)</li>
            <li>UnC - Desenvolver Web</li>
            <li>Freelancer</li>
          </InfoListSectionContent>
        </InfoListSection>
        <InfoListSection>
          <InfoListTitle>
            <Link to="" color="inherit">
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
            <Link to="" color="inherit">
              Mais
            </Link>
            <AddCircleIcon style={{ fontSize: "28px" }} />
          </InfoListTitle>
          <Divider />
          <InfoListSectionContent>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Artigos</li>
            <li>Contato</li>
          </InfoListSectionContent>
        </InfoListSection>
      </InfoList>
    </Container>
  );
};

export default memo(Sidebar);
