import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieItem from './components/MovieItem/MovieItem';

function App() {
  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if(search === ''){
      setIsLoading(false)
      setMovieList([])
      return;
    }
    setIsLoading(true)
    
    const timeout = setTimeout(async () => {
      try {
        const {data} = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=b4021278&s=${search}`)
        console.log(data);
        setMovieList(data.Search)

      } catch (error) {
        setIsError(true)
      }
      finally {
        setIsLoading(false)
      }

    }, 2000);


    
    return () => clearTimeout(timeout);

  }, [search])

  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      {isLoading ? "Ucitavanje" : isError ? "Greska" : movieList && Array.isArray(movieList) && <div className='moviesWrapper'>
        {/* {movieList?.map(movie => <li>{movie.Title}</li>)} */}
        {movieList?.map(movie => <MovieItem poster={movie.Poster} title={movie.Title} imdbID={movie.imdbID}/>)}
      </div>}
    </>
  );
}

export default App;
