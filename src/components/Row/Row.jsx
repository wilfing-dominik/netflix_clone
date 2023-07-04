import React, { useState, useEffect, useCallback } from "react"
import { imageBaseUrl, fetchData } from "../../utils/requests"
import ".//Row.css"
import Modal from "react-modal"

// Components
import Spinner from "../Spinner/Spinner"

function Row({ title, path }) {
  const [loading, setLoading] = useState(true)
  const [shows, setShows] = useState(null)

  const getData = useCallback(() => {
    fetchData(path)
      .then((response) => {
        setShows(response.data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [path])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div onClick={console.log("clicked")} className="row-posters">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          shows.map((show) => (
            <span key={show.id}>
              {show.backdrop_path != null && (
                <div className="show">
                  <p>{show.name ? show.name : show.title}</p>
                  <img
                    className="row-poster"
                    src={imageBaseUrl + show.backdrop_path}
                    alt={show.name ? show.name : show.title}
                  ></img>
                </div>
              )}
            </span>
          ))
        )}
      </div>
    </div>
  )
}

export default Row
