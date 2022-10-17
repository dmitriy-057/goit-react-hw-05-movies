
  export  const MovieDetailesInfo = ({
    dataMovie: { title, overview, genres = [], poster_path = '', vote_average },
  }) => {
    const baseUrlPatch = 'https://image.tmdb.org/t/p/w500';
    const getGenresTitle = genres => {
      if (genres.length) {
        return genres
          .map(({ name }) => {
            return name;
          })
          .join(',');
      }
      return 'Not Found';
    };
    const genresData = getGenresTitle(genres);
  
    return (
      <div display="flex">
        <img src={baseUrlPatch + poster_path} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genresData}</p>
        </div>
      </div>
    );
  };
//   export default MovieDetailesInfo;