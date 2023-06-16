import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../components/APIs/axios';
import requests from '../APIs/Request';
function Banner() {
    const [movie , setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
                return request;
        }
        fetchData();

    } , []);
    console.log(movie)
    
    const truncate = (string , n )=>{
        return string.length > n ? string.substr(0 , n-1) + "..." : string;
    }
  return (
    <div className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:'cover',
        
        backgroundPosition:'center center'
    }}>
        <div className='bannerContain'>
            <h1 className='bannerTitle'>{movie?.name}</h1>
            <div className='bannerButtons'>
                <button className='bannerButton'>Play</button>
                <button className='bannerButton'>My List</button>
            </div>
            <p className='movieDescription'>
                {
                    truncate( `${movie?.overview}` , 150)
                }
                
                </p>

        </div>
        <div className='bannerFadeButton' />
    </div>
  )
}

export default Banner