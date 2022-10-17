import GalleryMoviesItem from 'components/GalleryMoviesItem/GalleryMoviesItem';

const GalleryMovies = ({ movies, trendingMovies = null }) => {
  return (
    <>
      {trendingMovies && (
        <h1>{trendingMovies}</h1>
      )}
      {movies.length > 0 && (
        <>
          {movies.map(({ poster_path, id, title }) => {
            return (
              title && (
                <li key={id}>
                  <GalleryMoviesItem
                    trendingMoviesUrl={poster_path}
                    trendingMoviesID={id}
                    title={title}
                  />
                </li>
              )
            );
          })}
        </>
      )}
    </>
  );
};

export default GalleryMovies;
GalleryMovies.defaultProps = {
  movies: [],
};