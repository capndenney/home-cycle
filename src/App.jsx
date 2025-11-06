import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import TaskCard from "./components/common/TaskCard.jsx";
import EditTask from "./components/common/EditTask.jsx";
import Calendar from "./components/pages/Calendar.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [logInStatus, setLogInStatus] = useState(true); //TODO: UseState for log in status

  return (
    <div>
      <Router>
      <Header />
        {logInStatus && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:user/calendar" element={<Calendar />} />
            <Route path="/:user/task/:id" element={<TaskCard />} />
            <Route path="/:user/newtask" element={<EditTask />} />
            <Route path="*" element={<Home />} />
          </Routes>
        )}
        {!logInStatus && (
          <Routes>
            <Route path="*" element={<LogIn />} />
          </Routes>
        )}
      <Footer />
      </Router>
    </div>
  );
}

export default App;
