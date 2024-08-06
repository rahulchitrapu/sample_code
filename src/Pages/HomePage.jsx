import React from "react";
import MovieList from "../Components/MovieList";
import SideBar from "../Components/SideBar";

const HomePage = () => (
  <div className="flex-flex-start-flex-start">
    <div style={{ width: "200px" }}>
      <SideBar />
    </div>
    <div style={{ width: "calc(100% - 200px)" }}>
      <MovieList />
    </div>
  </div>
);

export default HomePage;
