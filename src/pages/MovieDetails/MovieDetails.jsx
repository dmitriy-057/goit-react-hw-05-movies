import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'Api/fetchApi';
import { useEffect, useState } from 'react';
import { BackPage } from 'components/BackPage/BackPage';
import {MovieDetailesInfo} from "components/MovieDetailesInfo/MovieDetailesInfo"

export default function MovieDetails() {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location.state);
  useEffect(() => {
    fetchMovieDetails(movieId).then(({ data }) => {
      setDataMovie(data);
    });
  }, [movieId]);
  return (
    <div>
    <BackPage to={backLinkHref}>Go Back</BackPage>
    <MovieDetailesInfo dataMovie={dataMovie} />
        <Outlet />
    </div>
    
  )
  
}
