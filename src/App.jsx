import React from "react";
import axios from "./utils/requests";
import "./styles/Global.css";

import Row from "./components/Row";
import Navbar from "./components/Navbar";
import PrimaryShow from "./components/PrimaryShow";

function App() {
  return (
    <>
      <Navbar />
      <PrimaryShow />
      {/* <Row title={"Action & Adventure"} url={axios.actionAdventure} /> */}
    </>
  );
}

export default App;
