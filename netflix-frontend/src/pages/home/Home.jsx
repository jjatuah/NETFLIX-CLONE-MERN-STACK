import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MovieList from "../../components/movie-list/MovieList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({type}) => {

  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/movielist${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJjNTBjOTA2ZDg1MDA4ZWNmOTY4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjczODg0MSwiZXhwIjoxNjc2NzQyNDQxfQ.Bho8o8s41XYDQQwrHxorXWmcZ_MhNee40c4L2LSELO8"
          }
        });  

        console.log(response);
      } catch (error) { 
        // console.log(error);
      }
    }
    getLists()
  }, [type, genre])
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