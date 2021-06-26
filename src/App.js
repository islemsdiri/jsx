import "./App.css";
import MovieCard from "./Component/movieCard";
import RenderNav from "./Component/NavBar";
import AddForm from "./Component/addMovie";
import React ,{useState} from 'react'
import { Route } from 'react-router';
import RenderCard from "./Component/renderCard";

// import 'semantic-ui-css/semantic.min.css'

function App() {
  
  const [moviesList, setMoviesList] = useState();
  const addMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    //Nav
  <div className="App">
<RenderNav />
<MovieCard />
</div> 
  );
}
export default App;



// a la place du nav
{/* <header className="App-header"> */}
  {/* <Route path="/" /> */}
{/* <Route path="/Home" component={RenderCard}/>
    <Route path="/AddForm" component={AddForm}/>
  </header> */}