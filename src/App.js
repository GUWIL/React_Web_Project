import "./App.css";
import Topbar from "./Components/Topbar/topbar";
import Sidebar from "./Components/Sidebar/sidebar";
import Home from "./Components/pages/home";
import Userlist from "./Components/pages/userlist";
import Analystic from "./Components/pages/analystic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/an" element={<Analystic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
