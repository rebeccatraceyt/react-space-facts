const SpaceFactCard = ({ title, image, content, onEdit, onDelete }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <img src={image} alt={title} style={{ width: '200px' }} />
        <p>{content}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  };
  
export default SpaceFactCard;