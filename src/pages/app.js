import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import ListPlayers from "../components/ListPlayers/ListPlayers";

const App = () => {
  return (
    <Layout>
      <React.Fragment>
         <Router>
          <ListPlayers path="/*" />
        </Router>

      </React.Fragment>
    </Layout>
  );
};

export default App;
