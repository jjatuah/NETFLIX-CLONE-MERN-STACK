import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";


export default function Home() {
  const months = useMemo(
    () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], [] ) ;

  const [userStats, setUserStats] = useState([]);

  useEffect(
    ()=> {
      const getStats = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/userstats`, { 
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJjNTBjOTA2ZDg1MDA4ZWNmOTY4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg0Nzg1NSwiZXhwIjoxNjc4NjI1NDU1fQ.OKuFwZlVS1pBioDztXe0Tt9nfDqmmbRyhSY3PwBPp6s"
            }
          });   
          const statsList = response.data.sort(function(a,b) {
            return a._id - b._id
          });

          statsList.map((item) => setUserStats((prev) => [
            ...prev, { name: months[item._id-1], "New Users": item.total},
          ]))  
        } catch (error) { 
          console.log(error);
        }
      }; getStats()
    }, [months]
  )
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
