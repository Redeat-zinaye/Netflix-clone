import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row rowId='1' id='netflix_originals' title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row rowId='2' id='trending_now' title={"Trending Now"} fetchUrl={requests.fetchTrending}/>
      <Row rowId='3' id='top_rated' title={"Top Rated"} fetchUrl={requests.fetchTopRatedMovies}/>
      <Row rowId='4' id='tv_topRated' title={"TV Top Rated"} fetchUrl={requests.fetchTVTopRatedMovies}/>
      <Row rowId='5' id='action_movies' title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>
      <Row rowId='6' id='comedy_movies' title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}/>
      <Row rowId='7' id='horror_movies' title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}/>
      <Row rowId='8' id='romance_movies' title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies}/>
      <Row rowId='9' id='documentaries' title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
