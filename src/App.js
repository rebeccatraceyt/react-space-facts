import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpaceFactCard from './components/SpaceFactCard';
import NavBar from './components/NavBar';

const App = () => {
  const [facts, setFacts] = useState([
    { title: 'The Sun', image: 'https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', content: 'The Sun is a star at the center of our solar system.' },
  ]);

  const filteredFacts = facts.filter(fact =>
    fact.title.toLowerCase()
  );

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="facts">
                {filteredFacts.map((fact, index) => (
                  <SpaceFactCard
                    key={index}
                    {...fact}
                  />
                ))}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;