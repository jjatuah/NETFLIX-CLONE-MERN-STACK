import "./Featured.scss";
import { FaAsymmetrik, FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { useEffect, useState } from "react";
import axios from "axios";


const Featured = ({type}) => {

  const [content, setContent] = useState({})

  useEffect(
    () => {
      const getRandomContent = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/movie/random?type=${type}`, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJjNTBjOTA2ZDg1MDA4ZWNmOTY4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg0Nzg1NSwiZXhwIjoxNjc4NjI1NDU1fQ.OKuFwZlVS1pBioDztXe0Tt9nfDqmmbRyhSY3PwBPp6s"
            }
          });
          setContent(response.data[0])
        } catch (error) {
          console.log(error);
        }
      }; 
      getRandomContent()
    }, [type]
  )
  return ( 
    <div className="featured">

      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img /*width="100%"*/ src={content.img} alt="" />

      <div className="info">
        <img
          src={content.imgSm}
          alt=""
        />
        <span className="desc">
          {content.desc}
        </span>

        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <ImInfo />
            <span>Info</span>
          </button>
        </div>
      </div>
      
    </div>
   );
}
 
export default Featured;