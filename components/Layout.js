import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = (props) => (
  <>

    <Navbar/>
    <main className="container py-4">{props.children}</main>
    <Footer/>

  </>
);

export default Layout;
