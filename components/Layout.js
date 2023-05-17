import Navbar from "./Navbar";

const Layout = (props) => (
  <>
    <Navbar />
    <main className="container py-4">{props.children}</main>
  </>
);

export default Layout;
