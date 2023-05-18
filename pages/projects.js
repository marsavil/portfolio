import Layout from "../components/Layout";
import projectsArray from "../data/myProjects";

const projects = () => (
  <Layout>
    <div className="card card-body bg-secondary">
      <h1>Projects</h1>
    </div>
    <div className="card card-body bg-light">
      {projectsArray.map((p) => (
        <div className="row py-2">
          <h3 className="text-dark">{p.name}</h3>
          <div className="col-md-6" >
            <img src={p.image} alt="" className="img-fluid" style={{ borderRadius: "5px" }} />
          </div>
          <div className="col-md-6">
            <h5 className="text-dark text-center">{p.description}</h5>
          </div>
          <div className="text-center" style={{ padding: "20px", backgroundColor: "#263238", borderRadius: "5px" }}>
            <a href={p.repository} style={{ textDecoration: "none", color: "whitesmoke", fontSize: "25px" }}>Repository</a>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default projects;
