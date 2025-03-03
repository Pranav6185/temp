import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import HomePage from "./pages/Home2";
import { Navigate } from 'react-router-dom';
import ResourcesPage from "./pages/ResourcePage";
import OvulationCalendar from "./pages/ovulatoinCalendar";
import HealthyPregnancyRecipes from "./pages/healthyRecipes";
import PregnancyQuestionsCenter from "./pages/pregnancyQuestions";
import NearbyHospitals from "./pages/NearbyHospitals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Calendar from "./pages/Calendar";
import PregnancyPage1 from "./pages/am-i-pregnant";
import PregnancyPage from "./pages/keepAndParent";
import PregnancyDueDateCalculator from "./pages/pregnancyDueDateCalculator";
import BabyNamesDirectory from "./pages/babyNamesDirectory";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/project" element={<PrivateRoute element={<HomePage />} />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/ovulationCalendar" element={<OvulationCalendar />} />
        <Route path="/healthy-pregnancy-recipes" element={<HealthyPregnancyRecipes />} />
        <Route path="/pregnancy-questions" element={<PregnancyQuestionsCenter />} />
        <Route path="/nearby-hospitals" element={<NearbyHospitals />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/am-i-pregnant" element={<PregnancyPage1 />} />
        <Route path="/keep-and-parent" element={<PregnancyPage />} />
        <Route path="/pregnancy-due-date-calculator" element={<PregnancyDueDateCalculator />} />
        <Route path="/baby-name-directory" element={<BabyNamesDirectory />} />
      </Routes>
    </Router>
  );
}

export default App;

