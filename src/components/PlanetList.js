import PlanetCard from './PlanetCard';

const PlanetList = ({ planets }) => {
  return (
    <div className="planet-list">
      {planets.map((planet, index) => (
        <PlanetCard key={index} {...planet} />
      ))}
    </div>
  );
};

export default PlanetList;