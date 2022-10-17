import GalleryMovies from 'components/GalleryMovies/GalleryMovies';
import { fetchTrendingMovies } from 'Api/fetchApi';
import { useState, useEffect } from 'react';
export default function Home() {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
      fetchTrendingMovies()
        .then(({ data: { results } }) => {
          setMovies(results);
        })
        .finally(() => {});
    }, []);
  return (
    <main>
      <GalleryMovies movies={movies} trendingMovies={'Trending Movies'} />{' '}
    </main>
  )
 
}
