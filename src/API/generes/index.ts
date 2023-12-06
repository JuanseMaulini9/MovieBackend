import { Genre, Item } from "../../types";
import { options, urlGenre } from "../config";

export async function movieGenre() {
  let response: Genre[];
  try {
    const res = await fetch(`${urlGenre}movie/list`, options);
    response = await res.json();
    return response;
  } catch (err) {
    console.error("error: ", err);
  }
}

export async function serieGenre() {
  let response: Genre[];
  try {
    const res = await fetch(`${urlGenre}tv/list`, options);
    response = await res.json();
    return response;
  } catch (err) {
    console.error("error: ", err);
  }
}
