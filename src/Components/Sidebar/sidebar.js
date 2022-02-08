import "./Sidebar.css";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="S_wr">
        <div className="S_menu">
          <h3 className="S_title">DashBoard</h3>
          <ul className="S_list">
            <li className="S_listItem">
              <MapsHomeWorkIcon />
              Home
            </li>
            <li className="S_listItem">
              <BarChartIcon />
              Analystics
            </li>
            <li className="S_listItem">
              <AccountCircleIcon />
              user
            </li>
            <li className="S_listItem">
              <NotificationImportantIcon />
              Event Log
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
