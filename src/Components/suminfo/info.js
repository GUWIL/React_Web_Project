import "./info.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function info() {
  return (
    <div className="info">
      <div className="info_item">
        <span className="info_title">Count of Problem</span>
        <div className="info_container">
          <span className="feature_rate">10</span>
          <span className="feature_icon">
            <ArrowUpwardIcon className="icon" />
            <ArrowDownwardIcon className="nicon" />
          </span>
        </div>
      </div>
      <div className="info_item">
        <span className="info_title">Solved</span>
        <div className="info_container">
          <span className="feature_rate">10</span>
          <span className="feature_icon">
            <ArrowUpwardIcon className="icon" />
            <ArrowDownwardIcon className="nicon" />
          </span>
        </div>
      </div>
      <div className="info_item">
        <span className="info_title">Un_Solved</span>
        <div className="info_container">
          <span className="feature_rate">10</span>
          <span className="feature_icon">
            <ArrowUpwardIcon className="icon" />
            <ArrowDownwardIcon className="nicon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default info;
