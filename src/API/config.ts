///////////////////// URLS ///////////////////////
export const urlPopular = "https://api.themoviedb.org/3/trending/";

export const urlGenre = "https://api.themoviedb.org/3/genre/";

export const urlDetail = "https://api.themoviedb.org/3/";

export const urlSearch = "https://api.themoviedb.org/3/search/mult";

export const urlImage = "https://image.tmdb.org/t/p/original/";

//////////////////// fetch config ///////////////
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FiODg5MzBmODFjM2YwMTZhN2FjY2Y1MGNkNTIwNSIsInN1YiI6IjY1NmY4OTY1ODgwNTUxMDBlMzcxODVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XqR1Ew67o774-3YVdbtIAUQYzf4G-XUPBHmvc93bJIo",
  },
};
