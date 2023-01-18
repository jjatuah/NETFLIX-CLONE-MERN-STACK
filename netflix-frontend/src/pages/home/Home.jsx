import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return ( 
    <div className="home">
      <Navbar />
      <img /*width="100%"*/ src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile picture" />
      <p>Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Material-UI.

Notice that contributions go far beyond pull requests and commits. Although we love giving you the opportunity to put your stamp on Material-UI, we also are thrilled to receive a variety of other contributions.</p>
    </div>
   );
}
 
export default Home;