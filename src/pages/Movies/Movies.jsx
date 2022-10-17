import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OnSearchMovie } from 'Api/fetchApi';
import { Formik, Form, Field } from 'formik';
import GalleryMovies from 'components/GalleryMovies/GalleryMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const actualQuery = searchParams.get('query') ?? '';
  const handleSabmit = ({ searchMovies }, { resetForm }) => {
    searchMovies = searchMovies.trim();
    setSearchParams(searchMovies !== '' ? { query: searchMovies } : {});
    resetForm();
  };
  useEffect(() => {
    if (actualQuery === '') {
      return;
    }
    OnSearchMovie(actualQuery).then(({ results }) => {
      setFetchedMovies(results);
    });
  }, [actualQuery]);

  return (
    <main>
      <Formik initialValues={{ searchMovies: '' }} onSubmit={handleSabmit}>
        <Form >
          <Field
            type="text"
            name="searchMovies"
            autoComplete="off"
            autoFocus
            placeholder="Search Movies"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <GalleryMovies movies={fetchedMovies} />
    </main>
  );
};
export default Movies;