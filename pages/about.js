import Layout from "../components/Layout";

const aboutMe = () => (
  <Layout>
    <div className="card card-body bg-secondary" >
    <h1>About Me</h1>
    </div>

    <section className="col-md-12 card card-body bg-light" style={{padding: "40px"}}>
      <h5 className="text-dark">
        My name is Mariano Villaescusa, I am a Full Stack Developer graduated from soyHenry and currently a
        student in the Bachelor's Degree in Programming at the National
        University of Quilmes. My background includes education and customer
        service, which has provided me with tools to actively listen to
        different issues and apply them in decisionmaking and conflict
        resolution. I have experience in handling JavaScript, React, Redux, CSS,
        Express, Sequelize, and MongoDB. I have a strong ability to work in a
        team and have completed both individual and group projects using agile
        methodologies. I have experience in Front-end development and,
        particularly, Back-end development.
      </h5>
    </section>
  </Layout>
);

export default aboutMe;
