import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Facts</Link></li>
        <li><Link to="/add-fact">Add Fact</Link></li>
        <li><Link to="/planets">Planets</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;