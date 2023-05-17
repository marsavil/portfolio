import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark-tertiary">
    <div className="container-fluid">
    <Link href="/index">
            <a className="nav-link active" aria-current="page" >
              Mariano Villaescusa
            </a>
            </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/index">
            <a className="nav-link active" aria-current="page" >
              Home
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
            <a className="nav-link" >
              About
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
            <a className="nav-link">
              Projects
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
