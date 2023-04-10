import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  console.log("App RUN");
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoivesHandler();
  }, [])

  const fetchMoivesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // test API..
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Someting went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id : movieData.episode_id,
          title : movieData.title,
          openingText : movieData.opening_crawl,
          releasedate : movieData.release_date,
        }
      });

      setMovie(transformedMovies);

    } catch(error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  let content = <p>Found no moives</p>;

  if (movie.length > 0) {
    content = <MoviesList movies={movie} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoivesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
