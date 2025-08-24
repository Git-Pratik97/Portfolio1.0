import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Introduction from './components/introComponent/Introduction';
import PortfolioNavbar from './components/navBarComponent/PortfolioNavbar';
import Contact from './components/contactComponent/Contact';
import Experience from './components/experienceComponent/Experience';

function App() {
  const [intro, setIntro] = useState('');
  const [projects, setProjects] = useState([]);
  const [skills, setSkill] = useState([]);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/info.json')
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error('Error fetching info:', error));
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <PortfolioNavbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          {/* Add more routes here as you add more components */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;