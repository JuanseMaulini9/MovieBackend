import { format } from "../utils";
import { Item, Genre, MediaType } from "../types";
import { urlPopular, urlGenre, options, urlSearch, urlDetail } from "./config";

export const getPopular = async () => {
  let response;
  try {
    const res = await fetch(`${urlPopular}all/week`, options);
    response = await res.json();
    const result: Item[] = response.results;
    console.log(response);
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
    console.log(response);
    return format(response);
  } catch (err) {
    console.error("error:" + err);
  }
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
