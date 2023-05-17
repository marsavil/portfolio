import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark-tertiary">
    <div className="container">
    <Link href="/" className="nav-link active" aria-current="page">
            
              Mariano Villaescusa
            
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
            <Link href="/" className="nav-link active" aria-current="page">
            
              Home
            
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
            
              About
            
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link">
            
              Projects
            
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
