import YourInfo from "./Components/YourInfo";
import SelectPlan from "./Components/SelectPlan";
import AddOns from "./Components/AddOns";
import Summary from "./Components/Summary";
import Confirmation from "./Components/Confirmation";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <nav className="app-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>1</span>
          <div>
            <h3>STEP 1</h3>
            <h3>YOUR INFO</h3>
          </div>
        </NavLink>
        <NavLink
          to="/selectPlan"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>2</span>
          <div>
            <h3>STEP 2</h3>
            <h3>SELECT PLAN</h3>
          </div>
        </NavLink>
        <NavLink
          to="/add-ons"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>3</span>
          <div>
            <h3>STEP 3</h3>
            <h3>ADD-ONS</h3>
          </div>
        </NavLink>
        <NavLink
          to="/summary"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>4</span>
          <div>
            <h3>STEP 4</h3>
            <h3>SUMMARY</h3>
          </div>
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<YourInfo />} />
        <Route path="/selectPlan" element={<SelectPlan />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
