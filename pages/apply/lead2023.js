import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import { restrictRange } from "../../helpers/restrictRange";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "../../components/Button/Button";
import Link from "next/link";
import styles from "../../styles/Apply.module.scss";
import FormCheckbox from "../../components/FormCheckbox/FormCheckbox";
import { emailExists } from "../../helpers/emailExists";
import { Oval } from "react-loader-spinner";
import PageLoading from "../../components/PageLoading/PageLoading";
import Image from "next/image";
import getSettings from "../../pages/api/getSettings";
import { applicationDataStore } from "./store/store";

const Apply = ({ display = "No" }) => {
  const router = useRouter();

  const store = applicationDataStore((state) => state);

  useEffect(() => {
    store.setMaxDate(
      new Date(
        store.applicationData.yOB,
        store.applicationData.mOB,
        0
      ).getDate()
    );

    let num = restrictRange(
      store.applicationData.dOB,
      store.applicationData.dOB,
      1,
      store.maxDate
    );
    if (
      store.applicationData.mOB !== "" &&
      store.applicationData.yOB !== "" &&
      store.applicationData.mOB !== ""
    ) {
      store.setApplicationData({
        ...store.applicationData,
        dOB: num,
      });
    }

    return () => {};
  }, [store.applicationData.mOB, store.applicationData.yOB, store.maxDate]);

  useEffect(() => {
    const depts = Object.keys(store.checkedDept).filter(
      (key) => store.checkedDept[key] === true
    );

    store.setApplicationData({
      ...store.applicationData,
      interestedDept: depts,
    });

    if (!depts.length) {
      store.setDeptTextHelper("(Please choose at least 1)");
    } else {
      store.setDeptTextHelper("");
    }

    // console.log(store.applicationData);
  }, [store.setCheckedDept, store.checkedDept]);

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
                  <section className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16">
                    {/** Personal Information Section */}
                    <h2 className=" text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                        <label className="block mb-6" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-input py-2 px-3 w-full"
                          placeholder="Donald Arthur"
                          value={store.applicationData.firstName}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              firstName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                        <label className="block mb-6" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-input py-2 px-3 w-full"
                          placeholder="Norman"
                          value={store.applicationData.lastName}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              lastName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                        <label className="block mb-6">
                          Nickname (Optional)
                        </label>
                        <input
                          type="text"
                          className="form-input py-2 px-3 w-full"
                          value={store.applicationData.nickname}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              nickname: e.target.value,
                            })
                          }
                          placeholder="Don"
                        />
                      </div>
                      <div className=" col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                        <label className="block mb-6">Birth Date</label>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-start-1">
                            <input
                              name="bMonth"
                              type="number"
                              min={1}
                              max={12}
                              className="form-input py-2 px-3 w-full"
                              placeholder="Month"
                              required
                              value={store.applicationData.mOB}
                              onChange={(e) => {
                                store.setApplicationData({
                                  ...store.applicationData,
                                  mOB:
                                    restrictRange(
                                      parseInt(e.target.value),
                                      store.applicationData.mOB,
                                      1,
                                      12
                                    ) || "",
                                });
                              }}
                            />
                          </div>
                          <div className="col-start-2">
                            <input
                              name="bDay"
                              type="number"
                              min={1}
                              max={store.maxDate}
                              className="form-input py-2 px-3 w-full"
                              placeholder="Day"
                              required
                              value={store.applicationData.dOB}
                              onChange={(e) => {
                                store.setApplicationData({
                                  ...store.applicationData,
                                  dOB:
                                    restrictRange(
                                      parseInt(e.target.value),
                                      store.applicationData.dOB,
                                      1,
                                      store.maxDate
                                    ) || "",
                                });
                              }}
                            />
                          </div>
                          <div className="col-start-3">
                            <input
                              name="bYear"
                              type="number"
                              min={1920}
                              max={new Date().getUTCFullYear() - 16}
                              maxLength={4}
                              required
                              className="form-input py-2 px-3 w-full"
                              placeholder="Year"
                              value={store.applicationData.yOB}
                              onChange={(e) =>
                                store.setApplicationData({
                                  ...store.applicationData,
                                  yOB: parseInt(e.target.value) || "",
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 md:col-span-4 mb-8">
                        <label
                          className="block mb-6"
                          name="pronoun"
                          htmlFor="pronoun"
                        >
                          Preferred Pronoun
                        </label>
                        <div>
                          <input
                            type="radio"
                            name="pronoun"
                            required
                            checked={
                              store.applicationData.pronoun === "He/ Him"
                            }
                            className="form-input py-2 px-3"
                            value="He/ Him"
                            onChange={(e) =>
                              store.setApplicationData({
                                ...store.applicationData,
                                pronoun: e.currentTarget.value,
                                customPronoun: "",
                              })
                            }
                          />
                          <span className="ml-2">He/ Him</span>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="pronoun"
                            required
                            checked={
                              store.applicationData.pronoun === "She/ Her"
                            }
                            className="form-input py-2 px-3"
                            value="She/ Her"
                            onChange={(e) =>
                              store.setApplicationData({
                                ...store.applicationData,
                                pronoun: e.currentTarget.value,
                                customPronoun: "",
                              })
                            }
                          />
                          <span className="ml-2">She/ Her</span>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="pronoun"
                            required
                            checked={
                              store.applicationData.pronoun === "They/ Them"
                            }
                            className="form-input py-2 px-3"
                            value="They/ Them"
                            onChange={(e) =>
                              store.setApplicationData({
                                ...store.applicationData,
                                pronoun: e.currentTarget.value,
                                customPronoun: "",
                              })
                            }
                          />
                          <span className="ml-2">They/ Them</span>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="pronoun"
                            required
                            className="form-input py-2 px-3"
                            checked={store.applicationData.pronoun === "Others"}
                            onChange={(e) =>
                              store.setApplicationData({
                                ...store.applicationData,
                                pronoun: e.currentTarget.value,
                              })
                            }
                            value="Others"
                          />
                          <span className="mx-2 py-2">Others</span>
                          <input
                            type="text"
                            required
                            className={`form-input  w-full sm:w-auto py-2 px-3`}
                            value={store.applicationData.customPronoun}
                            placeholder="Please specify"
                            disabled={
                              store.applicationData.pronoun !== "Others"
                            }
                            onChange={(e) =>
                              store.setApplicationData({
                                ...store.applicationData,
                                customPronoun: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  {/** Contact Information Section */}
                  <section className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16">
                    <h2 className=" text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                      Where can we contact you?
                    </h2>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-8">
                        <label className="block mb-6" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="form-input py-2 px-3 w-full"
                          value={store.applicationData.email}
                          placeholder="don_norman@dlsu.edu.ph"
                          onChange={(e) => {
                            store.setEmailFetching(false);

                            store.setApplicationData({
                              ...store.applicationData,
                              email: e.target.value.toLowerCase(),
                            });
                            store.setEmailTextHelper("");
                          }}
                          onBlur={async (e) => {
                            if (store.applicationData.email !== "") {
                              store.setEmailFetching(true);
                              e.target.setCustomValidity("Still validating.");

                              const res = await axios.get("/api/getLeadEmails");
                              store.setEmailFetching(false);
                              // const invalid = res.data.includes(store.applicationData.email);
                              const invalid = emailExists(
                                store.applicationData.email,
                                res.data
                              );

                              if (invalid) {
                                store.setEmailTextHelper(
                                  "This email was already used for an application."
                                );
                                e.target.setCustomValidity(
                                  "This email was already used for an application."
                                );
                              } else {
                                store.setEmailTextHelper("");
                                e.target.setCustomValidity("");
                              }
                            }
                          }}
                        />
                        {store.emailFetching ? (
                          <Oval color="gray" height={24} width={24} />
                        ) : (
                          <span className="text-red-500 text-sm h-16">
                            {store.emailTextHelper}
                          </span>
                        )}
                      </div>
                      <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-8">
                        <label className="block mb-6" htmlFor="contactnum">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="text"
                          pattern="^(09|639)\d{9}$"
                          value={store.applicationData.contactnum}
                          className="form-input py-2 px-3 w-full"
                          placeholder="63xxxxxxxxx"
                          onBlur={async (e) => {
                            if (String(e.target.value).trim() === "") return;
                            let isMatch = String(e.target.value).match(
                              /(09|639)\d{9}$/
                            );
                            if (isMatch === null) {
                              store.setNumberTextHelper(
                                "Make sure you are filling in a valid mobile number"
                              );
                            } else {
                              store.setNumberTextHelper("");
                            }
                          }}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              contactnum: e.target.value,
                            })
                          }
                        />
                        <span className="text-red-500 text-sm h-16">
                          {store.numberTextHelper}
                        </span>
                      </div>
                    </div>
                  </section>
                  {/** Academic Background Section */}
                  <section className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16">
                    <h2 className=" text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                      Academic Background
                    </h2>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6" htmlFor="college">
                          College
                        </label>
                        <select
                          name="college"
                          value={store.applicationData.college}
                          className="py-2.5 px-2 w-full"
                          required
                          style={{ backgroundColor: "#ECECEC" }}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              college: e.target.value,
                            })
                          }
                        >
                          <option value="">Please select your college</option>
                          <option value="De La Salle University - Manila">
                            De La Salle University - Manila
                          </option>
                          <option value="De La Salle - College of Saint Benilde Manila">
                            De La Salle - College of Saint Benilde Manila
                          </option>
                        </select>
                      </div>
                      <div className="col-span-2"></div>
                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6" htmlFor="program">
                          Program
                        </label>
                        <input
                          type="text"
                          name="program"
                          required
                          value={store.applicationData.program}
                          className="form-input py-2 px-3 w-full"
                          placeholder="Bachelor of Science in Human-Computer Interaction"
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              program: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    {/* Student ID */}
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                        <label className="block mb-6" htmlFor="firstName">
                          Student ID (if applicable)
                        </label>
                        <select
                          value={store.applicationData.studentID}
                          className="py-2.5 px-2 w-full"
                          style={{ backgroundColor: "#ECECEC" }}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              studentID: e.target.value,
                            })
                          }
                        >
                          <option value="">
                            Please select your ID Batch Number
                          </option>
                          <option value="117">117</option>
                          <option value="118">118</option>
                          <option value="119">119</option>
                          <option value="120">120</option>
                          <option value="121">121</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  {/** Miscellaneous Information */}
                  <section className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16">
                    <h2 className=" text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                      We want to know more about you
                    </h2>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6">
                          What are your hobbies?
                        </label>
                        <textarea
                          className="w-full p-2"
                          rows={5}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              hobbies: e.target.value,
                            })
                          }
                          value={store.applicationData.hobbies}
                        ></textarea>
                      </div>
                      <div className="col-span-2"></div>

                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6">
                          Why are you interested in becoming a lead?
                        </label>
                        <textarea
                          className="w-full p-2"
                          rows={5}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              interestedOrg: e.target.value,
                            })
                          }
                          value={store.applicationData.interestedOrg}
                        ></textarea>
                      </div>
                      <div className="col-span-2"></div>

                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6">
                          What is user experience to you?
                        </label>
                        <textarea
                          className="w-full p-2"
                          rows={5}
                          onChange={(e) =>
                            store.setApplicationData({
                              ...store.applicationData,
                              whatIsUX: e.target.value,
                            })
                          }
                          value={store.applicationData.whatIsUX}
                        ></textarea>
                      </div>
                      <div className="col-span-2"></div>

                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="inline-block mb-6">
                          What department/s are you interested in?
                        </label>
                        <span className="ml-2 inline-block text-red-500 text-sm">
                          {store.deptTextHelper}
                        </span>{" "}
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            store.setCheckedDept({
                              ...store.checkedDept,
                              "Community Manager":
                                !store.checkedDept["Community Manager"],
                            })
                          }
                          value={store.checkedDept["Community Manager"]}
                        >
                          Community Manager
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            store.setCheckedDept({
                              ...store.checkedDept,
                              Development: !store.checkedDept["Development"],
                            })
                          }
                          value={store.checkedDept["Development"]}
                        >
                          Development
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            store.setCheckedDept({
                              ...store.checkedDept,
                              Externals: !store.checkedDept.Externals,
                            })
                          }
                          value={store.checkedDept.Externals}
                        >
                          Externals
                        </FormCheckbox>{" "}
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            store.setCheckedDept({
                              ...store.checkedDept,
                              "Internal Growth":
                                !store.checkedDept["Internal Growth"],
                            })
                          }
                          value={store.checkedDept["Internal Growth"]}
                        >
                          Internal Growth
                        </FormCheckbox>
                      </div>
                    </div>
                  </section>
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
