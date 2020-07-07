import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div``;

export const AboutText = styled.div`
  padding: 12px 0;

  p {
    text-align: justify;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const TechList = styled.ul`
  font-size: 18px;
  line-height: 1.5;
  padding-left: 28px;
  margin: 16px 0;
`;

export const Link = styled(RouterLink)`
  text-decoration: underline;
  color: #000;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
