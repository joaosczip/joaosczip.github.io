import React from "react";

import Sidebar from "./components/Sidebar";
import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <h1>Portfolio</h1>
    </Container>
  );
};

export default App;
