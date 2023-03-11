import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";


export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(
    ()=> {
      const getNewUsers = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/user?new=true`, { 
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJjNTBjOTA2ZDg1MDA4ZWNmOTY4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg0Nzg1NSwiZXhwIjoxNjc4NjI1NDU1fQ.OKuFwZlVS1pBioDztXe0Tt9nfDqmmbRyhSY3PwBPp6s"
            }
          });   
          setNewUsers(response.data) 
        } catch (error) { 
          console.log(error);
        }
      }; getNewUsers()
    }, []
  )
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmListItem">
            <img
            src={user.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
            alt=""
            className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
        
        
      </ul>
    </div>
  );
}
