export interface Item {
  adult: boolean;
  ackdrop_path: string;
  id: number;
  title: string;
  original_lenguage: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[] | string[];
  popularity: number;
  realese_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
  original_country?: string[];
}

export interface Genre {
  id: number;
  name: string;
}
