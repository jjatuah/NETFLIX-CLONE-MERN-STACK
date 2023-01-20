import "./ListItem.scss";
import { FaPlay } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";


const ListItem = () => {
  return ( 
    <div className="listItem">
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />

      <div className="itemInfo">
        <div className="itemIcons">
          <FaPlay />
          <MdOutlineAdd />
          <BiLike />
          <BiDislike />
        </div>

        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>

        <div className="itemDesc">
          Michael Gregory Mizanin was born in Parma, Ohio, on October 8, 1980.His parents are divorced; he has a step-father and two half-siblings.
        </div>

        <div className="genre">Action</div>
      </div>
    </div>
   );
}
 
export default ListItem;