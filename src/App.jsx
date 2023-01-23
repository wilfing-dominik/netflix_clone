import React from "react";
// import axios from "../src/utils/requests";
import "./styles/Global.css";

// import Row from "./components/Row";
import Navbar from "./components/Navbar";
import PrimaryShow from "./components/PrimaryShow";

function App() {
  return (
    <>
      <Navbar />
      <PrimaryShow />
      {/* <Row title={"Action & Adventure"} url={axios.nowTrending} />
      <Row title={"Action & Adventure"} url={axios.actionAdventure} />
      <Row title={"Action & Adventure"} url={axios.comedy} />
      <Row title={"Action & Adventure"} url={axios.mistery} />
      <Row title={"Action & Adventure"} url={axios.nowTrending} />
      <Row title={"Action & Adventure"} url={axios.scifyFantasy} /> */}
    </>
  );
}

export default App;
