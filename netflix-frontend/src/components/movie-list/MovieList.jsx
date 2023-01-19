import "./MovieList.scss"
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const MovieList = () => {
  return ( 
    <div className="movieList">
      <span className="movieListTitle">Continue to watch</span>
      <div className="wrapper">
      <MdArrowForwardIos />
      <div className="container">
        
      </div>
      <MdArrowBackIos />
      </div>
    </div>
   );
}
 
export default MovieList;