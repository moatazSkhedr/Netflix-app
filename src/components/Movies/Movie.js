import React, { useEffect, useState } from 'react'
import './movie.css';
import axios from '../APIs/axios';
function Movie({title ,fetchUrl,isLargeRow }) {
  const [movies , setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(
        request.data.results
      )
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='rowPosters'>
        {
          
          movies.map((movie)=>(
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img key={movie.id} className={`rowPoster ${isLargeRow && 'rowPosterLarge'}`} src={`${base_url}${
                isLargeRow ? movie.poster_path:movie.backdrop_path
              }`} alt={movie.name} />
            ))

          
        }
        </div>
    </div>
  )
}

export default Movie