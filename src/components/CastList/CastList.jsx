
import CastListItem from 'components/CastListItem/CastListItem';

const CastList = ({ castsData: { cast = [] } }) => {
    return (
      <ul>
        {cast.length > 0
          ? cast.map(({ name, character, profile_path, credit_id }) => (
              < CastListItem
                name={name}
                character={character}
                profile_path={profile_path}
                key={credit_id}
              />
            ))
          : "We don't have any cast list for this movie"}
      </ul>
    );
  };
  
export default CastList;