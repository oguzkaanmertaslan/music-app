import React from "react";
import { useSelector } from "react-redux";
import { selectArtist } from "../../features/artistSlice";
import "./style.css";
const DetailsCard = ({ image, label, listener, album, playcount, alt }) => {
  const artist = useSelector(selectArtist);
  return (
    <div className="card">
      <div className="left-area">
        <div className="image-area">
          <img className="image-area" src={image} alt={alt} />
        </div>
        <div className="left-text">
          {album}
          <br />
          {artist.artist}
        </div>
      </div>
      <div className="right-area">
        <div>
          {listener} <span>{label}</span>
        </div>
        <div>{playcount} play</div>
      </div>
    </div>
  );
};
export default DetailsCard;
