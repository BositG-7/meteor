import React from "react";
import { DefaultRouter } from "./routes";

import { Header, Footer } from "./layout";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <DefaultRouter />
      </main>
      <Footer />
    </>
  );
};

export default App;
