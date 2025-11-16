import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import ViewTask from "./components/pages/ViewTask.jsx";
import EditTask from "./components/common/EditTask.jsx";
import Calendar from "./components/pages/Calendar.jsx";
import { useState } from "react";
import "./Index.css";
import "react-day-picker/style.css";
import LogIn from "./components/pages/LogIn.jsx";

function App() {

  const [logInStatus, setLogInStatus] = useState(true); 

  return (
    <>
      <Router id="main-content">
      <Header logInStatus={logInStatus} setLogInStatus={setLogInStatus}/>
        {logInStatus ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/task/:id" element={<ViewTask />} />
            <Route path="/newtask" element={<EditTask />} />
            <Route path="*" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LogIn logInStatus={logInStatus} setLogInStatus={setLogInStatus}/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<LogIn setLogInStatus={setLogInStatus}/>} />
          </Routes>
        )}
      <Footer />
      </Router>
    </>
  );
}

export default App;
