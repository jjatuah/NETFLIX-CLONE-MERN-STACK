import { useState, useEffect } from "react";
import "./ListItem.scss";
import { FaPlay } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({index, item}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(
    () => {
      const getMovie = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/movie/find/${item}`, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJjNTBjOTA2ZDg1MDA4ZWNmOTY4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg0Nzg1NSwiZXhwIjoxNjc4NjI1NDU1fQ.OKuFwZlVS1pBioDztXe0Tt9nfDqmmbRyhSY3PwBPp6s"
            }
          }); 

          setMovie(response.data)
        } catch (error) {
          console.log(error);
        }
      };
      getMovie()
    }, [item]
  )



  return ( 
    <Link to={{pathname : "/watch"}} state={{movieData : movie}}>
        <div className="listItem" 
      style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <img
          src={movie.img}
          alt=""
        />
        {
          isHovered && ( 
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="itemIcons">
                  <FaPlay className="itemIcon" />
                  <MdOutlineAdd className="itemIcon" />
                  <BiLike className="itemIcon" />
                  <BiDislike className="itemIcon" />
                </div>

                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>

                <div className="itemDesc">
                  {movie.desc}
                </div>

                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )
        }
      </div>
    </Link>
   );
}
 
export default ListItem;