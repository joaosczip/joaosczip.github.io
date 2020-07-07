import React from "react";

import Sidebar from "./components/Sidebar";
import { Container, MainContainer } from "./styles";
import Router from "./routes";

const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Router />
      </MainContainer>
    </Container>
  );
};

export default App;
