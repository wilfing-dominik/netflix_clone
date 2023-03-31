import React from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { requests } from "./utils/requests";

// Components
import Navbar from "./components/Navbar/Navbar";
import Rows from "./components/Rows/Rows";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index path="/" element={<Rows requests={requests.home} />} />
        <Route
          index
          path="/tv-shows"
          element={<Rows requests={requests.shows} />}
        />
        <Route
          index
          path="/movies"
          element={<Rows requests={requests.movies} />}
        />
        <Route
          index
          path="/trending"
          element={<Rows requests={requests.trending} />}
        />
        <Route
          index
          path="/my-list"
          element={<Rows requests={requests.trending} />}
        />
        <Route
          index
          path="/browse-language"
          element={<Rows requests={requests.trending} />}
        />
      </>
    )
  );

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}
