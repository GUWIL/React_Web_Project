import "./home.css";
import Homeinfo from "../suminfo/info";
import Chart from "../chart/chart";
import { homedata } from "../chart/dummydata";
function Home() {
  return (
    <div className="home">
      <Homeinfo />
      <Chart
        data={homedata}
        title="Solve Analytics"
        grid
        datakey="Solved User"
      />
    </div>
  );
}

export default Home;
