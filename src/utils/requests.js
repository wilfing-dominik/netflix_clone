const API_KEY = "772e434a2b577aeab0e8724d77d306ce";
const baseUrl = "https://api.themoviedb.org/3/";

const requests = {
  nowTrending: baseUrl + `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  actionAdventure:
    baseUrl + `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  netflixOriginals:
    baseUrl + `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  comedy: baseUrl + `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  romance: baseUrl + `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
