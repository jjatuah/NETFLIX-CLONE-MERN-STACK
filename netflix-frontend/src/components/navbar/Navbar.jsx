import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io"; 
import { TiArrowSortedDown } from "react-icons/ti";
import { BiDownArrow } from "react-icons/bi"; 
import "./Navbar.scss";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset <= 80 ? false : true); 
    return () => (window.onscroll = null)
  }
  return ( 
    <div className={isScrolled ? "navbar scrolled " : "navbar"}>
      <div className="navContainer">
        <div className="leftNav">
          <img src={NetflixLogo} alt="netflix logo" />
          <Link className="link" to="/"><span>Homepage</span></Link>
          <Link className="link" to="/series"><span>Series</span></Link>
          <Link className="link" to="/movies"><span>Movies</span></Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>

        <div className="rightNav">
          <BiSearch className="icon"/>
          <span>KID</span>
          <IoIosNotifications className="icon"/>
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile picture" />
          <div className="profile">
            <BiDownArrow className="icon"/>
            {/* <TiArrowSortedDown /> */}
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>

        </div>
      </div>
    </div>
   );
}
 
export default Navbar;