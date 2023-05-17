import Layout from "../components/Layout"


const index = () => (
  <Layout>
    {/* header card*/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-4">
              <img src="profile.jpeg" alt="" className="img-fluid"></img>
            </div>
            <div className="col-md-8">
              <h1>Mariano Salvador Villaescusa</h1>
              <h3>Fullstack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                cupiditate odit cumque reiciendis qui quae labore quos, ad
                repudiandae libero adipisci id a non fugit suscipit perspiciatis
                at reprehenderit. Autem!
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default index;
