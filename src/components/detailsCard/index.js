import React from "react";
import "./style.css";
const DetailsCard = ({
  image,
  label,
  listener,
  album,
  playcount,
  alt,
  artist,
}) => {
  return (
    <div className="card">
      <div className="left-area">
        <div className="image-area">
          <img className="image-area" src={image} alt={alt} />
        </div>
        <div className="left-text">
          {album}
          <br />
          {artist}
        </div>
      </div>
      <div className="right-area">
        {label && (
          <div>
            {listener} <span>{label}</span>
          </div>
        )}
        <div>{playcount} play</div>
      </div>
    </div>
  );
};
export default DetailsCard;
