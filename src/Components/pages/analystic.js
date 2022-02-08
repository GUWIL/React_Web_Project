import "./analystic.css";
import Chart from "../chart/chart";
import { homedata } from "../chart/dummydata";

function Analystic() {
  return (
    <div className="stic">
      <Chart
        data={homedata}
        title="Solve Analytics"
        grid
        datakey="Solved User"
      />
      <Chart
        data={homedata}
        title="Solve Analytics"
        grid
        datakey="Solved User"
      />
    </div>
  );
}

export default Analystic;
