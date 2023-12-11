import { format } from "../utils";
import { Item, Genre, MediaType } from "../types";
import {
  urlPopular,
  urlGenre,
  options,
  urlSearch,
  urlDetail,
  urlTop,
  urlNow,
} from "./config";

export const getPopular = async () => {
  let response;
  try {
    const res = await fetch(`${urlPopular}all/week`, options);
    response = await res.json();
    const result: Item[] = response.results;

    return result.map((item) => format(item));
  } catch (err) {
    console.error("error:" + err);
  }
};

export async function getDetail(mediaType: MediaType, id: number) {
  let response;
  try {
    const res = await fetch(`${urlDetail}${mediaType}/${id}`, options);
    response = await res.json();

    return format(response);
  } catch (err) {
    console.error("error:" + err);
  }
}

export async function getTopRated(mediaType: MediaType) {
  let response;
  try {
    const res = await fetch(`${urlTop}${mediaType}/top_rated`, options);
    response = await res.json();
    const result: Item[] = response.results;
    return result.map((item) => format(item));
  } catch (e) {}
}

export async function getInTheaters() {
  let response;
  try {
    const res = await fetch(urlNow, options);
    response = await res.json();
    const result: Item[] = response.results;
    return result.map((item) => format(item));
  } catch (e) {}
}

// arreglar mas adelante
// export async function search(query: string) {
//   let response;
//   try {
//     const res = await fetch(`${urlSearch}${query}`, options);
//     response = await res.json();
//     console.log(response);
//   } catch (e) {}
// }

export async function getGenre(mediaType: MediaType) {
  let response: Genre[];
  try {
    const res = await fetch(`${urlGenre}${mediaType}/list`, options);
    response = await res.json();
    return response;
  } catch (err) {
    console.error("error: ", err);
  }
}
