import { useState } from 'react';
import { fetchMovieСast } from 'Api/fetchApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CastList from 'components/CastList/CastList';
const Cast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);
  useEffect(() => {
    fetchMovieСast(movieId).then(({ data }) => setCasts(data));
  }, [movieId]);
  return <CastList castsData={casts} />;
};

export default Cast;
