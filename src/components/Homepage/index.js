import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTopArtists } from "../../services";
import { useDispatch } from "react-redux";
import { setArtist } from "../../features/artistSlice";
import "./style.css";
const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [topArtists, setTopArtists] = useState([]);

  const getTopArtist = async () => {
    const response = await getTopArtists();
    setTopArtists(response);
  };

  useEffect(() => {
    getTopArtist();
  }, []);
  const handleClick = (artist) => {
    dispatch(setArtist(artist));
    history.push("/details");
  };
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
              onClick={() => handleClick(artist.name)}
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
