import express from "express";
import cors from "cors";
import { Genre, Item } from "./types";
import { getDetail, getGenre } from "./API";
import { getPopular } from "./API";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/popular", async (req, res) => {
  const data = await getPopular();
  res.send(data);
});

app.get("/genreMovies", async (req, res) => {
  const data = await getGenre("movie");
  if (data) {
    const result: Genre[] = data;
    res.send(result);
  }
});

app.get("/genreSeries", async (req, res) => {
  const data = await getGenre("tv");
  if (data) {
    const result: Genre[] = data;
    res.send(result);
  }
});

app.get("/detail/:media/:id", async (req, res) => {
  const { media, id } = req.params;
  const data = await getDetail("tv", parseInt(id));
  res.send(data);
});

// arreglar mas adelante
// app.get("/search/:name", async (req, res) => {
//   const { name } = req.params;
//   if (name) {
//     const data = await search(name);
//     res.send(data);
//   }
// });

app.listen(port, () => {
  console.log("server run on port: ", port);
});
