import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTopArtists } from "../../services";
import { useDispatch } from "react-redux";
import { setArtist } from "../../features/artistSlice";
import ArtistCard from "../artistCard";
import "./style.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [topArtists, setTopArtists] = useState([]);

  const getTopArtist = async () => {
    const data = await getTopArtists();
    setTopArtists(data);
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
      <h1>Top Artists</h1>
      <div className="artists-area">
        {topArtists.map((artist) => {
          return (
            <ArtistCard
              artist={artist.name}
              image={artist.image[1]["#text"]}
              listener={artist.listeners}
              playcount={artist.playcount}
              onclick={() => handleClick(artist.name)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Homepage;
