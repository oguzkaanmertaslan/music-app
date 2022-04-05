import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectArtist } from "../../features/artistSlice";
import { getTopAlbums, getTopTracks } from "../../services";
import DetailsCard from "../detailsCard";
import "./style.css";
const Details = () => {
  const artist = useSelector(selectArtist);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  const getAlbums = async () => {
    const data = await getTopAlbums(artist.artist);
    setAlbums(data);
  };
  const getTracks = async () => {
    const data = await getTopTracks(artist.artist);
    setTracks(data);
  };

  useEffect(() => {
    getTracks();
    getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="area">
        <div className="artist-name">
          <h1>{artist.artist}</h1>
        </div>
        <div className="details-area">
          <div className="album-area">
            <h5>Top Albums</h5>
            {albums.map((album) => {
              return (
                <DetailsCard
                  image={album.image[1]["#text"]}
                  album={album.name}
                  playcount={album.playcount}
                  alt={album.name}
                  artist={artist.artist}
                />
              );
            })}
          </div>
          <div className="tracks-area">
            <h5>Top Tracks</h5>
            {tracks.map((track) => {
              return (
                <DetailsCard
                  image={track.image[1]["#text"]}
                  album={track.name}
                  playcount={track.playcount}
                  alt={track.name}
                  listener={track.listeners}
                  label={"listeners"}
                  artist={artist.artist}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
