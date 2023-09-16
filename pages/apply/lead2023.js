import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import { restrictRange } from "../../helpers/restrictRange";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "../../components/Button/Button";
import Link from "next/link";
import styles from "../../styles/Apply.module.scss";
import FormCheckbox from "../../components/Forms/FormCheckbox/FormCheckbox";
import { emailExists } from "../../helpers/emailExists";
import { Oval } from "react-loader-spinner";
import PageLoading from "../../components/PageLoading/PageLoading";
import Image from "next/image";
import getSettings from "../../pages/api/getSettings";
import { leadApplicationDataStore } from "./store/store";
import data from "../../components/Forms/utils/formFields/membershipApplication.json";
import Field from "../../components/Forms";

const Apply = ({ display = "No" }) => {
  const router = useRouter();

  const store = leadApplicationDataStore((state) => state);

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.status && store.statusText.firstName === "")
      router.push("/apply", undefined, { shallow: true });

    return () => {};
  }, [router, router.isReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!store.emailFetching) {
      store.setApplicationSending(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      try {
        store.setApplicationData(initialStatusTextState);
        store.setStatusText({
          firstName: store.applicationData.firstName,
          email: store.applicationData.email,
          contactnum: store.applicationData.contactnum,
        });

        await Promise.all([
          axios.post("/api/triggerWebhookLeadApp", store.applicationData),
          axios.post("/api/addLeadApplication", store.applicationData),
        ]);

        router.push("?status=success", undefined, { shallow: true });
      } catch (e) {
        router.push("?status=fail", undefined, { shallow: true });
      } finally {
        store.setApplicationSending(false);
      }
    }
  };

  return (
    <Layout active={4}>
      <SEO
        title={"Leads 2023 Application"}
        description="Apply as a lead today and help empower User Experience, Human-Computer Interaction, and Service Design in the campus. You can also get personally mentored by the alumni of the org."
        slug="apply"
      />

      <>
        {display === "Yes" ? (
          <>
            {store.applicationSending ? <PageLoading /> : null}

            {/* APPLICATION WAS SUBMITTED */}
            {router.query.status ? (
              <section className="px-4 sm:px-8 lg:px-32 pt-32 pb-6 min-h-screen">
                <div className="hidden md:block fixed right-20 top-0 md:w-64 z-0 lg:w-96 h-screen">
                  <Image
                    src={"/images/membership-sketch.svg"}
                    alt="Placeholder-Hero"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="mb-24 w-full grid grid-cols-12 gap-2">
                  <div className="col-start-1 col-end-12">
                    <h1 className=" text-2xl md:text-3xl lg:text-5xl mb-6 lg:mb-12">
                      {router.query.status === "success"
                        ? "Application Submitted"
                        : "Something Went Wrong"}
                    </h1>
                  </div>
                  <div className="col-start-1 col-end-12 md:col-end-9">
                    <p className="text-base lg:text-2xl leading-loose mb-4">
                      {router.query.status === "success" ? (
                        <>🥳 Congratulations </>
                      ) : (
                        <>🥺 Sorry </>
                      )}
                      {store.statusText?.firstName.trim()},
                    </p>
                    <p className="text-base lg:text-2xl leading-loose mb-4">
                      {router.query.status === "success" ? (
                        <>
                          The application was successfully submitted. Sit tight
                          while the team is reviewing your application. We will
                          be sending instructions for the next step of the
                          application to your email. If you haven't received an
                          email from us in 3 days, you may try contacting us
                          through our email at{" "}
                          <Link href={"mailto:dlsuuxsociety@gmail.com"}>
                            <a className="text-blue hover:underline">
                              dlsu.uxsociety@gmail.com
                            </a>
                          </Link>
                          .
                        </>
                      ) : (
                        <>
                          It looks like we are having issues processing your
                          application. Please try again later. If this problem
                          persists, you may try contacting us through our email
                          at{" "}
                          <Link href={"mailto:dlsuuxsociety@gmail.com"}>
                            <a className="text-blue hover:underline">
                              dlsu.uxsociety@gmail.com
                            </a>
                          </Link>
                          .
                        </>
                      )}
                    </p>
                    <br />
                    <br />
                    <p className="text-base lg:text-2xl leading-loose mb-28">
                      Sincerely,
                      <br />
                      UXSOC - Taft Team
                    </p>
                    <Button to="/about">LEARN MORE ABOUT US</Button>
                  </div>
                </div>
              </section>
            ) : (
              <>
                {/**Membership Application Form Section*/}
                <section className="container px-4 sm:px-8 lg:px-32 pt-32 ">
                  {/* Header */}
                  <div className="hidden md:block fixed md:right-0 xl:right-20 2xl:right-60 top-5 md:w-64 z-0 lg:w-96 h-screen">
                    <Image
                      src={"/images/membership-sketch.svg"}
                      alt="Placeholder-Hero"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>

                  <div className="mb-24 w-full grid grid-cols-12 gap-2">
                    <div className="col-start-1 col-end-12">
                      <h1 className=" text-2xl md:text-3xl lg:text-5xl mb-6 lg:mb-12">
                        Leads 2023 Application
                      </h1>
                    </div>
                    <div className="col-start-1 col-end-12 md:col-end-8">
                      <p className="text-base lg:text-2xl leading-loose mb-4">
                        Apply as a lead today and help empower User Experience,
                        Human-Computer Interaction, and Service Design in the
                        campus. You can also get personally mentored by the
                        alumni of the org.
                      </p>
                    </div>
                  </div>
                </section>
                {/** Actual Form */}
                <form action="POST" onSubmit={handleSubmit}>
                  {data.map((section, sectionIndex) => {
                    return (
                      <section
                        className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16"
                        key={sectionIndex}
                      >
                        <h2 className=" text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                          {section.name}
                        </h2>
                        <div className="grid grid-cols-8 gap-4">
                          {section.fields[0] ? section.fields.map((field, fieldIndex) => (
                            <Field
                              key={fieldIndex}
                              type={field.type}
                              fieldProps={{
                                ...field,
                                formData: store.applicationData,
                                setFormData: store.setApplicationData,
                              }}
                            />
                          )) : section.fields.lead.map((field, fieldIndex) => (
                            <Field
                              key={fieldIndex}
                              type={field.type}
                              fieldProps={{
                                ...field,
                                formData: store.applicationData,
                                setFormData: store.setApplicationData,
                              }}
                            />
                          )) }
                        </div>
                      </section>
                    );
                  })}
                  <section className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 md:col-span-6 mb-8">
                        <input
                          id="send"
                          type={"submit"}
                          value={"SEND APPLICATION"}
                          disabled={
                            store.deptTextHelper !== "" || store.emailFetching
                          }
                          className={`font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green ${
                            store.deptTextHelper === "" && !store.emailFetching
                              ? `cursor-pointer ${styles.btn_container}`
                              : "cursor-not-allowed opacity-50"
                          }`}
                        />
                      </div>
                    </div>
                  </section>
                </form>
              </>
            )}
          </>
        ) : (
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
                <p>
                  We will be announcing the date for our leads application.
                  Please check our{" "}
                  <span className="text-blue">
                    <Link
                      href="https://www.facebook.com/uxsocietydlsu"
                      passHref
                    >
                      <a target={"_blank"}>Facebook</a>
                    </Link>
                  </span>{" "}
                  page for updates.
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    </Layout>
  );
};

export default Apply;

export async function getServerSideProps() {
  const settings = await getSettings();
  return {
    props: {
      display: settings.display_lead_form,
    },
  };
}
