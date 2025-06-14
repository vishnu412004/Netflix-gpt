import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRated } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRated = useSelector(store=>store.movies.TopRated)
  const getTopRated = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    if(!topRated) getTopRated();
  }, []);
};

export default useTopRated;