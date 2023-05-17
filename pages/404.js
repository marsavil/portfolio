import Layout from "../components/Layout";
import Layou from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        This page doesn't exit. Please return to{" "}
        <Link href="/">
          Home
        </Link>
      </p>
    </div>
  </Layout>
);
export default custom404