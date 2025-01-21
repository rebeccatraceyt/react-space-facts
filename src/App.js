import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpaceFactCard from "./components/SpaceFactCard";
import NavBar from "./components/NavBar";
import AddFactForm from "./components/AddFactForm";
import mockApi from "./api/mockApi";
import PlanetList from "./components/PlanetList";

const App = () => {
  const [facts, setFacts] = useState([
    {
      title: "The Sun is huge!",
      image:
        "https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "The Sun is a star at the center of our solar system.",
    },
  ]);

  const [planets] = useState([
      {
        name: "Mercury",
        image: "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
        feature: "Smallest planet in the solar system.",
      },
      {
        name: "Venus",
        image: "https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
        feature: "Hottest planet due to its thick atmosphere.",
      },
      {
        name: "Earth",
        image: "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg",
        feature: "The only planet known to support life.",
      },
      {
        name: "Mars",
        image: "https://www.solarsystemscope.com/textures/download/2k_mars.jpg",
        feature: "Known as the Red Planet due to iron oxide.",
      },
    ]);
    
    const addFact = (newFact) => {
      const updatedFacts = [...facts, newFact];
      setFacts(updatedFacts);
      mockApi.saveFacts(updatedFacts);
    };
  
    const deleteFact = (index) => {
      const updatedFacts = facts.filter((_, i) => i !== index);
      setFacts(updatedFacts);
      mockApi.saveFacts(updatedFacts);
    };
  
    const filteredFacts = facts.filter((fact) =>
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
                      onDelete={() => deleteFact(index)}
                    />
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/add-fact" element={<AddFactForm addFact={addFact} />} />
          <Route path="/planets" element={<PlanetList planets={planets} />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  