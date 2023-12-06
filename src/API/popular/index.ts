import { urlPopular, options } from "../config";

export async function popularAll() {
  let response;
  try {
    const res = await fetch(`${urlPopular}all/week`, options);
    response = await res.json();
  } catch (err) {
    console.error("error:" + err);
  }
  return response;
}

export async function popularMovie() {
  let response;
  try {
    const res = await fetch(`${urlPopular}movie/week`, options);
    response = await res.json();
  } catch (err) {
    console.error("error:" + err);
  }
  return response;
}

export async function popularSerie() {
  let response;
  try {
    const res = await fetch(`${urlPopular}tv/week`, options);
    response = await res.json();
  } catch (err) {
    console.error("error:" + err);
  }
  return response;
}
