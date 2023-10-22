import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Image from "next/image";

const Apply = ({}) => {
  return (
    <Layout active={4}>
      <SEO
        title={"Application"}
        description="Apply as a core member today and get exclusive mentorship from
                  professionals of the field. You can also help in organizing
                  UX-related events or workshops for the student community in
                  Taft."
        slug="apply"
      />
      <div className="flex items-center min-h-[80vh] container mx-auto">
        <div className="w-full">
          <h2 className="text-center mb-4">Join us Now!</h2>
          <p className="mb-8 text-center">
            Elevate and expand your journey with User Experience Society - Taft
            this A.Y. 2023-2024.
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <Link href={"/apply/lead2023"}>
              <a className="w-full md:w-1/3 group scale-90 transition-all duration-500 ease-in-out hover:scale-100 focus:scale-100 shadow-md p-4 rounded-lg border border-green mx-4">
                <div className="relative w-full h-32 opacity-80 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 ease-in-out">
                  <Image
                    src={"/images/services-ux-education-and-training.png"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition={"center"}
                  />
                </div>
                <h3 className="text-center">As Lead</h3>
              </a>
            </Link>
            <Link href={"/apply/member2023"}>
              <a className="w-full md:w-1/3 group scale-90 transition-all duration-500 ease-in-out hover:scale-100 focus:scale-100  shadow-md p-4 rounded-lg border border-lightgreen mx-4">
                <div className="relative w-full h-32 opacity-80 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 ease-in-out">
                  <Image
                    src={"/images/services-web-design-and-development.png"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition={"center"}
                  />
                </div>
                <h3 className="text-center">As Member</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;
