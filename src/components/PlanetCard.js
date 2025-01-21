const PlanetCard = ({ name, image, feature }) => {
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} style={{ width: '200px' }} />
        <p>{feature}</p>
      </div>
    );
  };
  
export default PlanetCard;