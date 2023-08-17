import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner";
import SEO from "../components/seo";

export default function Tutorials() {
  return (
    <Layout active={2}>
      <SEO title={"Tutorial | Components and Hooks"} />
      <div className="text-red-50 h-screen bg-green flex items-center  justify-center">
        <Spinner />
      </div>
    </Layout>
  );
}

//export async function getServerSideProps() {}
