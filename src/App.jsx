import React, { useEffect, useState } from "react";
import { fetchAllData } from "./utils/requests";

// Components
import Navbar from "./components/Navbar";
import PrimaryShow from "./components/PrimaryShow";
import Row from "./components/Row";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch all external
  useEffect(() => {
    fetchAllData(setData, setLoading);
  }, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <Navbar arrivals={data.arrivals} />
      <PrimaryShow />
      <div className="rows">
        <Row title={"Now Trending"} data={data.nowTrending} />
        <Row title={"Action & Adventure"} data={data.actionAdventure} />
        <Row title={"Comedy"} data={data.comedy} />
        <Row title={"Horror"} data={data.horror} />
        <Row title={"Netflix Originals"} data={data.netflixOriginals} />
      </div>
    </>
  );
}

export default App;
