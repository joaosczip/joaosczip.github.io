import styled from "styled-components";
import MaterialAvatar from "@material-ui/core/Avatar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vw;
  color: #fff;
  background-color: #403c3c;
  border-right: 4px solid #e2e2e2;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 0 28px;
  min-width: 420px;
`;

export const MainInfo = styled.div`
  width: 100%;
  align-items: center;
  justify-content: start;
`;

export const Avatar = styled(MaterialAvatar)`
  margin-top: 30px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const PersonalInfo = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

export const InfoList = styled.div`
  width: 100%;
  margin-top: 16px;

  div + div {
    margin-top: 32px;
  }
`;

export const InfoListSection = styled.div``;

export const InfoListTitle = styled.h1`
  font-size: 22px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoListSectionContent = styled.ul`
  list-style-type: none;

  li {
    font-size: 18px;
    margin-top: 8px;
  }
`;

export const Divider = styled.div`
  background-color: #fff;
  height: 1px;
`;
