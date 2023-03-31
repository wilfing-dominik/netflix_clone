import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Spinner({ loading }) {
  return (
    <>
      <ScaleLoader
        color={"#ffffff"}
        loading={loading}
        // cssOverride={style}
        size={150}
        aria-label="Loading Spinner"
      />
    </>
  );
}

// const style = {
//   color: "#ffffff",
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   margin: "auto",
//   maxWidth: "100%",
//   maxHeight: "100%",
//   overflow: "auto",
// };
