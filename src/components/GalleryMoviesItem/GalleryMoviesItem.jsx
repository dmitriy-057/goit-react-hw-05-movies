import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const GalleryMoviesItem = ({ trendingMoviesUrl, trendingMoviesID, title }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const CaptchaPosterPath = (base_url, url_patch) => {
    if (!url_patch) {
      return 'https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png';
    }
    return base_url + url_patch;
  };
  return (
    <NavLink to={`/movies/${trendingMoviesID}`} state={{ from: location }}>
      <img src={CaptchaPosterPath(baseUrl, trendingMoviesUrl)} alt="" />
      <p>{title}</p>
      </NavLink>
  );
};

export default GalleryMoviesItem;