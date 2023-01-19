import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MovieList from "../../components/movie-list/MovieList";

const Home = () => {
  return ( 
    <div className="home">
      <Navbar />
      <Featured type={"movie"}/>
      <MovieList />
    </div>
   );
}
 
export default Home;