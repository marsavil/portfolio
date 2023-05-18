import Link from "next/link";

const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" >
              <Link legacyBehavior href={"/"}>
                <a className="nav-link active" aria-current="page" style={{color: "whitesmoke", fontSize: "25px"}}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/about">
                <a className="nav-link" style={{color: "whitesmoke", fontSize: "25px"}}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/education">
                <a className="nav-link" style={{color: "whitesmoke", fontSize: "25px"}}>Education</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href={"/projects"}>
                <a className="nav-link" style={{color: "whitesmoke", fontSize: "25px"}}>Projects</a>
              </Link>
            </li>
            <li className="nav-item" >
              <Link legacyBehavior href={"/contact"}>
                <a className="nav-link" style={{color: "whitesmoke", fontSize: "25px"}}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
