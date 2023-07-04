import React, { useEffect } from "react"

//Components
import BannerShow from "../BannerShow/BannerShow"
import Footer from "../Footer/Footer"
import Row from "../Row/Row"

export default function Rows({ requests }) {
  useEffect(() => {
    let body = document.querySelector("body")
    body.classList.add("loaded")
    console.log(requests)
  }, [])

  return (
    <>
      <main>
        <BannerShow />
        <div className="rows">
          {Object.values(requests.paths).map((path, index) => (
            <Row key={index} title={requests.names[index]} path={path} />
          ))}
        </div>
        <Footer />
      </main>
    </>
  )
}
