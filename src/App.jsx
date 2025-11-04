import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import TaskCard from './components/common/TaskCard.jsx';
import EditTask from './components/common/EditTask.jsx';

import './App.css';

function App() {


  return (
    <div>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/task/:id" element={<TaskCard />} />
        <Route path="/newtask" element={<EditTask />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App
