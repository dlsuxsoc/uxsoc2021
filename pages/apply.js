import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Image from "next/image";
import Link from "next/link";

export default function Apply() {
  return (
    <Layout active={4}>
      <SEO
        title={"Membership Application"}
        description="Apply as a core member today and get exclusive mentorship from
                  professionals of the field. You can also help in organizing
                  UX-related events or workshops for the student community in
                  Taft."
        slug="apply"
      />
      <section className="container h-screen w-screen">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="relative h-28 w-3/6 lg:h-20 lg:w-1/6 2xl:h-40">
            <Image
              src={"/images/nav-logo-mobile.png"}
              alt="Placeholder-Hero"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="text-center text-xl md:text-xl mt-4 md:mt-5 w-96 lg:w-3/6 2xl:text-2xl">
            <p>We will be announcing the date for our membership application. Please check our <span className="text-blue">
              <Link href="https://www.facebook.com/uxsocietydlsu" passHref >
                <a target={"_blank"}>
                  Facebook
                </a>
              </Link>
            </span> page for updates.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}