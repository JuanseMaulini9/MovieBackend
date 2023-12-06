import express from "express";
import cors from "cors";
import { Genre, Item } from "./types";

import { popularAll, popularMovie, popularSerie } from "./API/popular";
import { movieGenre, serieGenre } from "./API/generes";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/popular", async (req, res) => {
  const data = await popularAll();
  const result: Item[] = data.results;
  res.send(result);
});

app.get("/popularMovie", async (req, res) => {
  const data = await popularMovie();
  const result: Item[] = data.results;
  res.send(result);
});

app.get("/popularSerie", async (req, res) => {
  const data = await popularSerie();
  const result: Item[] = data.results;
  res.send(result);
});

app.get("/genreMovie", async (req, res) => {
  const data = await movieGenre();
  if (data) {
    const result: Genre[] = data;
    res.send(result);
  }
});

app.get("/genreSerie", async (req, res) => {
  const data = await movieGenre();
  if (data) {
    const result: Genre[] = data;
    console.log(result);
    res.send(result);
  }
});

app.listen(port, () => {
  console.log("server run on port: ", port);
});

//TODO:
// -seguir con el front
// -mergear los generos
// -conseguir las imagenes
// y ver que mas se me ocurre
