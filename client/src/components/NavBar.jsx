import { Link } from "react-router-dom";
export default function NavBar() {

  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Perfil
            </Link>
          </li>
          {token ? null : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar Sesion
              </Link>
            </li>
          )}
          {token ? null : (
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Registrarse
              </Link>
            </li>
          )}
          {token? <li className="nav-item">
            <button
              className="badge bg-danger p-1"
              onClick={() => {
                logOut();
              }}
            >
              Cerrar sesión
            </button>
          </li> : null}
        </ul>
      </div>
    </nav>
  );
}
