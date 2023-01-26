import React from "react";
import axios from "../src/utils/requests";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import PrimaryShow from "./components/PrimaryShow";

function App() {
  return (
    <>
      <Navbar />
      <PrimaryShow />
      <div className="rows">
        <Row title={"Now Trending"} url={axios.nowTrending} />
        <Row title={"Action & Adventure"} url={axios.actionAdventure} />
        <Row title={"Comedy"} url={axios.comedy} />
        <Row title={"Romance"} url={axios.romance} />
        <Row title={"Netflix Originals"} url={axios.netflixOriginals} />
      </div>
    </>
  );
}

export default App;
