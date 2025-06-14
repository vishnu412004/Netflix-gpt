import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCards = ({ posterpath }) => {
  if(!posterpath) return null;
  return (
    <div className="w-48">
      <img src={IMG_CDN + posterpath} alt="movie card" />
    </div>
  );
};

export default MovieCards;
