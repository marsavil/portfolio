import Layout from "../components/Layout";
import { skills, experience } from "../data/profile";

const index = () => (
  <Layout>
    {/* header card*/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-4">
              <img src="profile.jpeg" alt="" className="img-fluid" style={{borderRadius:"15px"}}></img>
            </div>
            <div className="col-md-8">
              <h1>Mariano Salvador Villaescusa</h1>
              <h3>Fullstack Developer</h3>
              <p>
                My name is Mariano Villaescusa, I am a Full Stack Developer
                graduated from soyHenry and currently a student in the
                Bachelor's Degree in Programming at the National University of
                Quilmes.
              </p>
              <a href="/contact" style={{textDecoration:"none"}}>Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*Second section*/}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills?.map((s) => (
              <>
                <h5>{s.skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: ` ${s.percentage}% ` }}
                  ></div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>

            </ul>
            {experience?.map((e) => (
              <li style={{ fontSize: "20px", color: "whitesmoke" }}>{e.institution}
                <div style={{padding:"15px"}}>
                  <h6 className="text-dark">{e.description}</h6>
                  <h6 className="text-dark">{`from ${e.from} to ${e.to}`}</h6>
                </div>

                <div >
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default index;
