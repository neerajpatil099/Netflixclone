import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request'

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Banner/>
    <Row title='NETFLIX ORIGNALS' fetchUrl={requests.fetchNetflixOriginals} isLarge />
    <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
    <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
    <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
    <Row title='Documentried' fetchUrl={requests.fetchDocumantaries}/>
    <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
    <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
    <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
