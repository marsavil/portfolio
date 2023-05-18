import Layout from "../components/Layout";
import projectsArray from "../data/myProjects";
console.log(projectsArray);

const projects = () => (
  <Layout>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Projects</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-body bg-light">
      {projectsArray.map((p) => (
        <div className="row py-2">
          <h3 className="text-dark">{p.name}</h3>
          <div className="col-md-4">
            <img src={p.image} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <p className="text-dark text-center">{p.description}</p>
          </div>

          <a href={p.repository}>Repository</a>
        </div>
      ))}
    </div>
  </Layout>
);

export default projects;
