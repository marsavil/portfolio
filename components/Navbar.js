import Link from "next/link";

const Navbar = () => (
<div className="container">
  <nav className="navbar navbar-expand-lg bg-light-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav "
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar__links">
            <li className="nav-item" >
              <Link legacyBehavior href={"/"}>
                <a className="nav-link text-dark" aria-current="page" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/about">
                <a className="nav-link text-dark" >About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/education">
                <a className="nav-link text-dark" >Education</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href={"/projects"}>
                <a className="nav-link text-dark" >Projects</a>
              </Link>
            </li>
            <li className="nav-item" >
              <Link legacyBehavior href={"/contact"}>
                <a className="nav-link text-dark" >Contact</a>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
  </div>
);

export default Navbar;
