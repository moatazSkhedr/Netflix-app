
const API_KEY = "58233762d771731cb994f6147e6025a1";

const requests = {
    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComodyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


//https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US => Final Request

export default requests;
