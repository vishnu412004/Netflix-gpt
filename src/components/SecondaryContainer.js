import { useSelector } from "react-redux"
import MovieLists from "./MovieLists"


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-slate-800">
      <div className="mt-0 md:-mt-40 relative z-30">
      <MovieLists title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieLists title={"Top Rated"} movies={movies?.TopRated}/>
      <MovieLists title={"Popular"} movies={movies?.PopularMovies}/>
      <MovieLists title={"UpComing"} movies={movies?.nowPlayingMovies}/>
      <MovieLists title={"What's New"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer