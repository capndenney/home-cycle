import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

function App() {


  return (
    <div>
    <Header />
    <Router>
      <Routes>

      </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App
