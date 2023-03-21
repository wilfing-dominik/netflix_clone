import React, { useEffect, useState, useCallback } from "react";
import { fetchAllData as fetchData } from "./utils/requests";

// Components
import Spinner from "./components/Spinner/Spinner";
import Navbar from "./components/Navbar/Navbar";
import BannerShow from "./components/BannerShow/BannerShow";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = useCallback(() => {
    fetchData()
      .then((response) => {
        // Sets background image
        let body = document.querySelector("body");
        body.classList.add("loaded");

        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (error) return error.message;
  else if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <Navbar arrivals={data.arrivals} />
      <main>
        <BannerShow />
        <div className="rows">
          <Row title={"Now Trending"} data={data.nowTrending} />
          <Row title={"Action & Adventure"} data={data.actionAdventure} />
          <Row title={"Comedy"} data={data.comedy} />
          <Row title={"Horror"} data={data.horror} />
          <Row title={"Netflix Originals"} data={data.netflixOriginals} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
