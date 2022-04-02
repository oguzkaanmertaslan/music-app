import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTopArtists, getTopAlbums, getTopTracks } from "../../services";
import "./style.css";
const Homepage = () => {
  console.log(getTopAlbums());
  const history = useHistory();
  const [topArtists, setTopArtists] = useState([]);
  const getTopArtist = async () => {
    const response = await getTopArtists();
    setTopArtists(response);
  };
  useEffect(() => {
    getTopArtist();
  }, []);

  return (
    <div className="homepage-area">
      <div>
        <h1>Top Artists</h1>
      </div>
      <div>
        {topArtists.map((artist) => {
          return (
            <div
              className="artists"
              key={artist.mbid}
              onClick={() => history.push("/details")}
            >
              <div>
                <img src={artist.image[0]["#text"]} alt={artist.name} />
              </div>
              <div>Artist: {artist.name}</div>
              <div>listeners: {artist.listeners}</div>
              <div>playcount: {artist.playcount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
