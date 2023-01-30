const API_KEY = "772e434a2b577aeab0e8724d77d306ce";
const baseUrl = "https://api.themoviedb.org/3/";
export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

export let currentDate = new Date().toISOString().slice(0, 10);
let aWeekBeforeCurrentDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const requests = {
  nowTrending: baseUrl + `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  actionAdventure:
    baseUrl + `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  netflixOriginals:
    baseUrl + `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  comedy: baseUrl + `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: baseUrl + `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  arrivals:
    baseUrl +
    `/discover/tv?api_key=${API_KEY}&first_air_date.gte=${aWeekBeforeCurrentDate}&first_air_date.lte=${currentDate}&language=en-US&region=US&sort_by=popularity.desc&page=1&with_origin_country=US`,
};

export default requests;
