import "./Watch.scss";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state.movieData
  return ( 
    <div className="watch">
      <Link to="/">
        <div className="back">
          <BiArrowBack />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
   );
}
 
export default Watch;