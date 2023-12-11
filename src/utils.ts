import { MediaType } from "./types";

export const format = (obj: any, MediaType?: MediaType) => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    description: obj.overview,
    coverPath: obj.backdrop_path,
    genreIds: obj.genre_ids || obj.genres?.map((g: any) => g.id) || [],
    mediatype: obj.media_type || MediaType,
    posterPath: obj.poster_path,
  };
};
