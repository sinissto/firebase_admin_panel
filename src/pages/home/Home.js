import './Home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TableList from '../../components/table/Table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={3 / 1} title="Last 6 months (revenue)" />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
