import React, { useRef, dispatch } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { queryMistral } from "../utils/mistralGpt";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    const userInput = searchText.current.value.trim();
    if (!userInput) return;
    const prompt = `Act as a Movie Recommendation system. Suggest all popular movies related to the query: "${userInput}".  
The movies should come from a variety of languages including Hindi, English, Telugu, Tamil, Kannada, and Malayalam.If any language is mentioned show more in that language. 
Only give me the movie names, comma separated, with no extra text or numbering.Just the movie names dont say anything like here are your results.`;

    const responseText = await queryMistral(prompt);
    const gptResults = responseText.split(",");

    const promiseArray = gptResults.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    // console.log(gptResults);
    dispatch(
      addGptMovieResult({ movieNames: gptResults, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%]">
      <form
        className=" bg-black w-full md:w-1/2 m-auto grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="text-white px-6 py-4 m-4 col-span-3 bg-red-500"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
