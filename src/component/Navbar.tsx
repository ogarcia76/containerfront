import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link
          className="btn btn-outline-primary"
          to="/"
        >
          Inicio
        </Link>
        <Link
          className="btn btn-outline-primary"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="btn btn-outline-primary"
          to="/contacto"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;