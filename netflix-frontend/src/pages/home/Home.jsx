import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MovieList from "../../components/movie-list/MovieList";

const Home = ({type}) => {
  return ( 
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
   );
}
 
export default Home;