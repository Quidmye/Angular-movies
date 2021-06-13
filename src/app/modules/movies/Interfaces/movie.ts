export interface Movie {
  id: number|string,
  title: string,
  release_date: string
  poster_path: string,
  overview: string
  genre_ids?: string
  revenue?: number|string
  genres?: any[],
  tagline?: string,
}
