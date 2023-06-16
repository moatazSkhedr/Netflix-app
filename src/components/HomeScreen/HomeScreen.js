import React from 'react'
import './homeScreen.css';
import Nav from '../Nav/Nav';
import Banner from '../BannerSection/Banner';
import Movie from '../Movies/Movie';
import requests from '../APIs/Request';
function HomeScreen() {
  return (
    <div className='homeScreen'>

       {/* Nav */}
       <Nav />
       {/* Banner */}
       <Banner />

       {/* Movies */}
       <Movie 
       title="NETFLEX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow
       />
       <Movie title="Trending Now" fetchUrl = {requests.fetchTrending}/>
       <Movie title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Movie title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Movie title="Comedy Movies" fetchUrl={requests.fetchComodyMovies}/>
       <Movie title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Movie title="Documentaries" fetchUrl={requests.fetchDocumenaries} />


    </div>
  )
}

export default HomeScreen