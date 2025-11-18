import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import ViewTask from "./components/pages/ViewTask.jsx";
import EditTask from "./components/common/EditTask.jsx";
import CalendarOverview from "./components/pages/CalendarOverview.jsx";
import { useState } from "react";
import "./Index.css";
import "react-day-picker/style.css";
import LogIn from "./components/pages/LogIn.jsx";
import sampleTasks from "./sampleData/sampleTasks.js";

function App() {
  const [logInStatus, setLogInStatus] = useState(true);
  const [taskArray, setTaskArray] = useState(sampleTasks);

  const saveTask = (updatedTask) => {
    setTaskArray((curArray) => {
      const taskIndex = curArray.findIndex(
        (t) => t.taskId === updatedTask.taskId
      );

      if (taskIndex !== -1) {
        const updatedArray = [...curArray];
        updatedArray[taskIndex] = updatedTask;
        return updatedArray;
      } else {
        return [...curArray, updatedTask];
      }
    });
  };

  return (
    <>
      <Router id="main-content">
        <Header logInStatus={logInStatus} setLogInStatus={setLogInStatus} />
        {logInStatus ? (
          <Routes>
            <Route path="/" element={<Home tasks={taskArray} />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<CalendarOverview />} />
            <Route path="/task/:id" element={<ViewTask tasks={taskArray} />} />
            <Route
              path="/task/:id/edit"
              element={<EditTask tasks={taskArray} saveTask={saveTask} />}
            />
            <Route
              path="/newtask"
              element={<EditTask tasks={taskArray} saveTask={saveTask} />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <LogIn
                  logInStatus={logInStatus}
                  setLogInStatus={setLogInStatus}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={<LogIn setLogInStatus={setLogInStatus} />}
            />
          </Routes>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
