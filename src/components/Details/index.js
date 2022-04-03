import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectArtist } from "../../features/artistSlice";
import { getTopAlbums, getTopTracks } from "../../services";
const Details = () => {
  const artist = useSelector(selectArtist);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const getAlbums = async () => {
    const response = await getTopAlbums(artist.artist);
    setAlbums(response);
  };
  const getTracks = async () => {
    const response = await getTopTracks(artist.artist);
    setTracks(response);
  };

  useEffect(() => {
    getAlbums();
    getTracks();
  }, [artist]);

  return (
    <div>
      <h1>{artist.artist}</h1>
      {albums.map((album) => {
        return (
          <div key={album.mbid}>
            <img src={album.image[0]["#text"]} alt={album.name} />
            <div>Album: {album.name}</div>
            <div>playcount: {album.playcount}</div>
          </div>
        );
      })}
      <div>
        <h1>Top Tracks</h1>
        {tracks.map((track) => {
          return (
            <div key={track.mbid}>
              <img src={track.image[0]["#text"]} alt={track.name} />
              <div>Track: {track.name}</div>
              <div>playcount: {track.playcount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
