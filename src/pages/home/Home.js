import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">CONTAINER</div>
    </div>
  );
};

export default Home;
