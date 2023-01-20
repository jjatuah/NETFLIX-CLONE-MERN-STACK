import "./MovieList.scss";
import { useRef, useState } from "react";
import ListItem from "../list-item/ListItem";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const MovieList = () => {

  const movieListRef = useRef();

  const [slideNumber, setSlideNumber] = useState(0)

  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)

    let distance = movieListRef.current.getBoundingClientRect().x - 50

    if (direction === "left" && slideNumber > 0) {

      setSlideNumber(slideNumber - 1)

      movieListRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if (direction === "right" && slideNumber < 5) {

      setSlideNumber(slideNumber + 1)

      movieListRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return ( 
    <div className="movieList">
      <span className="movieListTitle">Continue to watch</span>
      <div className="wrapper">
        <MdArrowBackIos className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}} />
        <div className="container" ref={movieListRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />        
        </div>
        <MdArrowForwardIos className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
   );
}
 
export default MovieList;