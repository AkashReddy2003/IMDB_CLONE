
import './App.css';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/H';
import Home from './pages/Home';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Movie from './pages/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movielist/:type" element={<MovieList/>}></Route>
          <Route path="movielist/:type" element={<MovieList/>}></Route>
          <Route path="moviesearch/:q" element={<MovieSearch/>}></Route>
          <Route path="/*" element={<h1>error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
