import React from "react";
import { getTopAlbums, getTopArtists, getTopTracks } from "../../services";
const Homepage = () => {
  console.log(getTopAlbums());
  console.log(getTopArtists());
  console.log(getTopTracks());
  return <div>Hello world</div>;
};

export default Homepage;
