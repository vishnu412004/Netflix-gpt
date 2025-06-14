import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG } from "../utils/constants";


const GptSearch = () => {
  return (
    <div>
      <div className=" fixed -z-10 bg-opacity-85 ">
        <img className="h-screen object-cover md:w-screen" src={BG} alt="bg"></img>
      </div>
      <div className="pt-[30%] md:p-0">
      <GptSearchBar />
      <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
