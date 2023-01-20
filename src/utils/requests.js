const API_KEY = "772e434a2b577aeab0e8724d77d306ce";
const baseUrl = "https://api.themoviedb.org/3/";

const requests = {
  nowTrending: baseUrl + `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  actionAdventure:
    baseUrl +
    `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  mistery:
    baseUrl +
    `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  scifyFantasy:
    baseUrl +
    `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  comedy:
    baseUrl +
    `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  crime:
    baseUrl +
    `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
};

export default requests;
