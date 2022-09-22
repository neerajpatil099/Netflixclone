import React ,{useEffect,useState} from 'react'
import HorizontalScroll from 'react-horizontal-scrolling';
import axios from '../axios';
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/w500';

export default function Row({title,fetchUrl , isLarge}) {
   const [movies, setMovies] = useState([])
   const [trailerUrl, setTrailerUrl] = useState('')
 
   useEffect(() => {
     async function fetchData(){
      const request = await axios.get( fetchUrl);
      setMovies (request.data.results)
      return request
    }

   fetchData();
   }, [fetchUrl])

  //  const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };
  
  // const handleClick = (movie) => {
  //   if (trailerUrl){
  //     setTrailerUrl('')
  //   } else {
  //  movieTrailer(movie?.name || '')
  //   .then((url) =>{
  //      const urlParams = new URLSearchParams(new URL(url).search);
  //      setTrailerUrl(urlParams.get('v'))
  //   })
  //   .catch(error =>console.log(error))
  // }
  // }


  return (
    <div>
      <h2 className='title'> {title} </h2>
        <div className='row-posters' >
       <HorizontalScroll 
       >
       {movies.map(movie=>(
        <img className={`row_poster ${isLarge && ' row_posterLarge'}`} key={movie.id} src={`${baseURL}${isLarge? movie.poster_path : movie.poster_path}`} alt={''} />
       ))}
       </HorizontalScroll>
      </div>
    </div>
  )
}
