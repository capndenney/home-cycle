import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import TaskCard from "./components/common/TaskCard.jsx";
import EditTask from "./components/common/EditTask.jsx";
import Calendar from "./components/pages/Calendar.jsx";
import { useState } from "react";
import "./Index.css";
import "react-day-picker/style.css";
import LogIn from "./components/pages/LogIn.jsx";

function App() {
  const [logInStatus, setLogInStatus] = useState(true); //TODO: UseState for log in status

  return (
    <>
      <Router id="main-content">
      <Header />
        {logInStatus ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/task/:id" element={<TaskCard />} />
            <Route path="/newtask" element={<EditTask />} />
            <Route path="*" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<LogIn />} />
          </Routes>
        )}
      <Footer />
      </Router>
    </>
  );
}

export default App;
