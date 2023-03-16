import React, { useEffect, useState } from "react";
import requests from "../src/utils/requests";
import axios from "axios";

// Components
import Navbar from "./components/Navbar";
import PrimaryShow from "./components/PrimaryShow";
import Row from "./components/Row";
import Spinner from "./components/Spinner";

function App() {
  const [fetchData, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all shows
  useEffect(() => {
    const getData = async () => {
      let response = await axios.all([
        axios.get(requests.nowTrending),
        axios.get(requests.actionAdventure),
        axios.get(requests.comedy),
        axios.get(requests.horror),
        axios.get(requests.netflixOriginals),
        axios.get(requests.arrivals),
      ]);
      let body = document.querySelector("body");
      setLoading(false);
      body.classList.add("loaded");
      setShows(response);
    };
    getData();
  }, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <Navbar arrivals={fetchData[5].data.results} />
      <PrimaryShow />
      <div className="rows">
        <Row title={"Now Trending"} data={fetchData[0].data.results} />
        <Row title={"Action & Adventure"} data={fetchData[1].data.results} />
        <Row title={"Comedy"} data={fetchData[2].data.results} />
        <Row title={"Horror"} data={fetchData[3].data.results} />
        <Row title={"Netflix Originals"} data={fetchData[4].data.results} />
      </div>
    </>
  );
}

export default App;
