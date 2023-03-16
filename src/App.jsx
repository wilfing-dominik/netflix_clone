import React, { useEffect, useState } from "react";
import requests from "../src/utils/requests";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import PrimaryShow from "./components/PrimaryShow";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [shows, setShows] = useState([]);
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
      ]);
      setShows(response);
      setLoading(false);
    };
    getData();
  }, []);

  const style = {
    position: "fixed",
    top: "40%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    color: "#ffffff",
  };

  if (loading)
    return (
      <>
        <ClipLoader
          color={"#ffffff"}
          loading={loading}
          cssOverride={style}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </>
    );

  return (
    <>
      <Navbar />
      <PrimaryShow />
      <div className="rows">
        <Row title={"Now Trending"} data={shows[0].data.results} />
        <Row title={"Action & Adventure"} data={shows[1].data.results} />
        <Row title={"Comedy"} data={shows[2].data.results} />
        <Row title={"Horror"} data={shows[3].data.results} />
        <Row title={"Netflix Originals"} data={shows[4].data.results} />
      </div>
    </>
  );
}

export default App;
