import React from "react";
import "./style.css";
const ArtistCard = ({ image, listener, artist, playcount, alt, onclick }) => {
  return (
    <div className="artist-card" onClick={onclick}>
      <div className="left-area">
        <div>
          <img className="image-area" src={image} alt={alt} />
        </div>
        <div className="left-text">
          <span>Artist</span>
          {artist}
        </div>
      </div>
      <div className="right-area">
        <div>listeners : {listener}</div>
        <div>playcount : {playcount}</div>
      </div>
    </div>
  );
};

export default ArtistCard;
