import React, { useEffect } from "react";

//Components
import BannerShow from "../BannerShow/BannerShow";
import Footer from "../Footer/Footer";
import Row from "../Row/Row";

export default function Rows({ requests }) {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("loaded");
  }, []);

  return (
    <>
      <main>
        <BannerShow />
        <div className="rows">
          {Object.values(requests).map((path, index) => (
            <Row key={index} title={path} path={path} />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
