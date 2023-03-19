import axios from "axios";

// For TMDB public API
const API_KEY = "772e434a2b577aeab0e8724d77d306ce";
const baseUrl = "https://api.themoviedb.org/3/";
export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

// Returns the current date in a y-m-d formatted string
export let currentDate = new Date().toISOString().slice(0, 10);

// Returns date of the week before the current date in a y-m-d formatted string
let aWeekBeforeCurrentDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

// API paths for certain categories of movies and TV shows
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
  allTVShows: baseUrl + `/discover/tv?api_key=${API_KEY}`, //TODO
};

// Fetches all data, that is need for the page to work, sets up page for initial use
export const fetchAllData = async (handler, loader) => {
  try {
    let response = await axios.all([
      axios.get(requests.nowTrending),
      axios.get(requests.actionAdventure),
      axios.get(requests.comedy),
      axios.get(requests.horror),
      axios.get(requests.netflixOriginals),
      axios.get(requests.arrivals),
    ]);

    // Formats the fetch data to an object
    let formattedData = {
      nowTrending: response[0].data.results,
      actionAdventure: response[1].data.results,
      comedy: response[2].data.results,
      horror: response[3].data.results,
      netflixOriginals: response[4].data.results,
      arrivals: response[5].data.results,
    };

    // Sets bacground image after API call is finished
    let body = document.querySelector("body");
    body.classList.add("loaded");

    handler(formattedData);
    loader(false);
  } catch (error) {
    console.log(error);
  }
};

export default requests;
