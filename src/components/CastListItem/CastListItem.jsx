const CastListItem = ({ name, character, profile_path = '' }) => {
    const urlImg = 'https://image.tmdb.org/t/p/w500';
    const CaptchaPosterPath = (base_url, url_patch) => {
      if (!url_patch) {
        return 'https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png';
      }
      return base_url + url_patch;
    };
  
    return (
      <li>
        <img src={CaptchaPosterPath(urlImg, profile_path)} alt={name} />
        <p>{name}</p>
        <p> Character: {character}</p>
      </li>
    );
  };
  
  export default CastListItem;