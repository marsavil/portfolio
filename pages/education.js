import Layout from "../components/Layout"
const education = () => (
  <Layout>
    <div className="card card-body bg-secondary" >
      <h1>Education</h1>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light">
          <div className="row">
            <h5>2022/23</h5>
            <div className="col-md-12">
              <div className="container" style={{ padding: "25px" }}>
                <h3 className="text-center ">soyHenry</h3>
              </div>

              <h5 className="text-dark">
                Throughout the duration of this Full Stack Developer Bootcamp, spanning six months, I had the invaluable opportunity to acquire essential skills in the realm of web development. Through an intensive training program, I gained proficiency in constructing comprehensive web applications, encompassing various aspects such as user interface design, server-side programming, and database management. The curriculum provided extensive exploration of critical areas within web development, including Front End, Back End, JavaScript, HTML, CSS, Node, React, Redux, and SQL. I obtained knowledge on designing and implementing visually appealing and functional user interfaces using HTML and CSS, as well as crafting server-side logic utilizing JavaScript and Node. Moreover, I gained familiarity with popular client-side technologies such as React and Redux, enabling the creation of modern and highly interactive web applications. Additionally, I acquired proficiency in SQL, facilitating efficient database management and administration. In essence, this Full Stack Developer Bootcamp furnished me with comprehensive and robust training in web development, equipping me with the necessary skills to tackle the challenges prevalent in today's professional landscape within this field.
              </h5>
            </div>
            <div className="col-md-12" style={{ padding: "20px" }}>
              <img src="henry.jpeg" alt="certificate" width={"50%"}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light">
          <div className="row">
            <h5>2022</h5>
            <div className="col-md-12" style={{ padding: "15px" }}>
              <h3 className="text-center">Edutin</h3>
            </div>
            <div className="col-md-12" style={{ padding: "20px" }}>
              <div className="col-md-12" style={{ justify: "center" }}>
                <img src="python.jpg" alt="certificate" width={"50%"}></img>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default education