import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Rules from './components/Rules';
import Cards from './components/Cards';
import AdminLogin from './components/adminLogin';
import CardMenu from './components/CardMenu';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/cards" element={<CardMenu />} />
        <Route path="/cards/:color" element={<Cards />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
