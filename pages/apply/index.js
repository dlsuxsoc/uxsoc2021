import React, { useEffect, useState } from "react";
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
import getSettings from "../api/getSettings";
import applicationFormState from "../../components/Forms/utils/initialState/applicationFormState";
import statusTextState from "../../components/Forms/utils/initialState/statusTextState";
import data from "../../components/Forms/utils/formFields/membershipApplication.json";
import Field from "../../components/Forms";

const Apply = ({ display = "No" }) => {
  const [maxDate, setMaxDate] = useState("");
  const router = useRouter();
  const [emailFetching, setEmailFetching] = useState(false);
  const [applicationSending, setApplicationSending] = useState(false);
  const [emailTextHelper, setEmailTextHelper] = useState("");
  const [numberTextHelper, setNumberTextHelper] = useState("");
  const [deptTextHelper, setDeptTextHelper] = useState("");
  const [statusText, setStatusText] = useState(statusTextState);
  const [applicationData, setApplicationData] = useState(applicationFormState);
  const [checkedDept, setCheckedDept] = useState({
    Design: false,
    Development: false,
    Externals: false,
    "Internal Growth": false,
    Marketing: false,
    Research: false,
  });

  useEffect(() => {
    setMaxDate(new Date(applicationData.yOB, applicationData.mOB, 0).getDate());

    let num = restrictRange(
      applicationData.dOB,
      applicationData.dOB,
      1,
      maxDate
    );
    if (
      applicationData.mOB !== "" &&
      applicationData.yOB !== "" &&
      applicationData.mOB !== ""
    ) {
      setApplicationData({
        ...applicationData,
        dOB: num,
      });
    }

    return () => {};
  }, [applicationData.mOB, applicationData.yOB, maxDate]);

  useEffect(() => {
    const depts = Object.keys(checkedDept).filter(
      (key) => checkedDept[key] === true
    );

    setApplicationData({
      ...applicationData,
      interestedDept: depts,
    });

    if (!depts.length) {
      setDeptTextHelper("(Please choose at least 1)");
    } else {
      setDeptTextHelper("");
    }

    // console.log(applicationData);
  }, [setCheckedDept, checkedDept]);

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.status && statusText.firstName === "")
      router.push("/apply", undefined, { shallow: true });

    return () => {};
  }, [router, router.isReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailFetching) {
      setApplicationSending(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      try {
        setApplicationData(statusTextState);
        setStatusText({
          firstName: applicationData.firstName,
          email: applicationData.email,
          contactnum: applicationData.contactnum,
        });

        await Promise.all([
          axios.post("/api/triggerWebhookMemApp", applicationData),
          axios.post("/api/addMembershipApplication", applicationData),
        ]);

        router.push("?status=success", undefined, { shallow: true });
      } catch (e) {
        // console.log(e);
        router.push("?status=fail", undefined, { shallow: true });
      } finally {
        setApplicationSending(false);
      }
    }
  };

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

      <>
        {display === "Yes" ? (
          <>
            {applicationSending ? <PageLoading /> : null}

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
                      {statusText?.firstName.trim()},
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
                          . Alternatively, you may use{" "}
                          <Link href="https://forms.gle/ySsVc44JGFp2j41C9">
                            <a
                              target={"_blank"}
                              className="text-blue hover:underline"
                            >
                              this Google Form
                            </a>
                          </Link>{" "}
                          for the application.
                        </>
                      )}
                    </p>
                    <br />
                    <br />
                    <p className="text-base lg:text-2xl leading-loose mb-28">
                      Sincerely,
                      <br />
                      UXSOC - DLSU Team
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
                        Membership Application
                      </h1>
                    </div>
                    <div className="col-start-1 col-end-12 md:col-end-8">
                      <p className="text-base lg:text-2xl leading-loose mb-4">
                        Apply as a core member today and get exclusive
                        mentorship from professionals of the field. You can also
                        help in organizing UX-related events or workshops for
                        the student community in Taft.
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
                          {section.fields.map((field, fieldIndex) => (
                            <Field
                              key={fieldIndex}
                              type={field.type}
                              fieldProps={{
                                ...field,
                                formData: applicationData,
                                setFormData: setApplicationData,
                              }}
                            />
                          ))}
                        </div>
                      </section>
                    );
                  })}

                  <section className="container px-4 sm:px-8 lg:px-32 pt-2 pb-16">
                    {/** Personal Information Section */}
                    <h2 className=" text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-8 gap-4">
                      <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-4">
                        <label className="block mb-6" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-input py-2 px-3 w-full"
                          placeholder="Norman"
                          value={applicationData.lastName}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
                              lastName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-3 mb-4">
                        <label className="block mb-6">
                          Nickname (Optional)
                        </label>
                        <input
                          type="text"
                          className="form-input py-2 px-3 w-full"
                          value={applicationData.nickname}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
                              nickname: e.target.value,
                            })
                          }
                          placeholder="Don"
                        />
                      </div>
                      <div className=" col-span-12 sm:col-span-6 md:col-span-3 mb-4">
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
                              value={applicationData.mOB}
                              onChange={(e) => {
                                setApplicationData({
                                  ...applicationData,
                                  mOB:
                                    restrictRange(
                                      parseInt(e.target.value),
                                      applicationData.mOB,
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
                              max={maxDate}
                              className="form-input py-2 px-3 w-full"
                              placeholder="Day"
                              required
                              value={applicationData.dOB}
                              onChange={(e) => {
                                setApplicationData({
                                  ...applicationData,
                                  dOB:
                                    restrictRange(
                                      parseInt(e.target.value),
                                      applicationData.dOB,
                                      1,
                                      maxDate
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
                              value={applicationData.yOB}
                              onChange={(e) =>
                                setApplicationData({
                                  ...applicationData,
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
                            checked={applicationData.pronoun === "He/ Him"}
                            className="form-input py-2 px-3"
                            value="He/ Him"
                            onChange={(e) =>
                              setApplicationData({
                                ...applicationData,
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
                            checked={applicationData.pronoun === "She/ Her"}
                            className="form-input py-2 px-3"
                            value="She/ Her"
                            onChange={(e) =>
                              setApplicationData({
                                ...applicationData,
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
                            checked={applicationData.pronoun === "They/ Them"}
                            className="form-input py-2 px-3"
                            value="They/ Them"
                            onChange={(e) =>
                              setApplicationData({
                                ...applicationData,
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
                            checked={applicationData.pronoun === "Others"}
                            onChange={(e) =>
                              setApplicationData({
                                ...applicationData,
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
                            value={applicationData.customPronoun}
                            placeholder="Please specify"
                            disabled={applicationData.pronoun !== "Others"}
                            onChange={(e) =>
                              setApplicationData({
                                ...applicationData,
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
                          value={applicationData.email}
                          placeholder="don_norman@dlsu.edu.ph"
                          onChange={(e) => {
                            setEmailFetching(false);

                            setApplicationData({
                              ...applicationData,
                              email: e.target.value.toLowerCase(),
                            });
                            setEmailTextHelper("");
                          }}
                          onBlur={async (e) => {
                            if (applicationData.email !== "") {
                              setEmailFetching(true);
                              e.target.setCustomValidity("Still validating.");

                              const res = await axios.get(
                                "/api/getMembershipEmails"
                              );
                              setEmailFetching(false);
                              // const invalid = res.data.includes(applicationData.email);
                              const invalid = emailExists(
                                applicationData.email,
                                res.data
                              );

                              if (invalid) {
                                setEmailTextHelper(
                                  "This email was already used for an application."
                                );
                                e.target.setCustomValidity(
                                  "This email was already used for an application."
                                );
                              } else {
                                setEmailTextHelper("");
                                e.target.setCustomValidity("");
                              }
                            }
                          }}
                        />
                        {emailFetching ? (
                          <Oval color="gray" height={24} width={24} />
                        ) : (
                          <span className="text-red-500 text-sm h-16">
                            {emailTextHelper}
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
                          value={applicationData.contactnum}
                          className="form-input py-2 px-3 w-full"
                          placeholder="63xxxxxxxxx"
                          onBlur={async (e) => {
                            console.log(e.target.value);
                            if (String(e.target.value).trim() === "") return;
                            let isMatch = String(e.target.value).match(
                              /(09|639)\d{9}$/
                            );
                            if (isMatch === null) {
                              setNumberTextHelper(
                                "Make sure you are inputting a valid mobile number"
                              );
                            } else {
                              setNumberTextHelper("");
                            }
                          }}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
                              contactnum: e.target.value,
                            })
                          }
                        />
                        <span className="text-red-500 text-sm h-16">
                          {numberTextHelper}
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
                          value={applicationData.college}
                          className="py-2.5 px-2 w-full"
                          required
                          style={{ backgroundColor: "#ECECEC" }}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
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
                          value={applicationData.program}
                          className="form-input py-2 px-3 w-full"
                          placeholder="Bachelor of Science in Human-Computer Interaction"
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
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
                          value={applicationData.studentID}
                          className="py-2.5 px-2 w-full"
                          style={{ backgroundColor: "#ECECEC" }}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
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
                            setApplicationData({
                              ...applicationData,
                              hobbies: e.target.value,
                            })
                          }
                          value={applicationData.hobbies}
                        ></textarea>
                      </div>
                      <div className="col-span-2"></div>

                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6">
                          Why are you interested in joining the organization?
                        </label>
                        <textarea
                          className="w-full p-2"
                          rows={5}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
                              interestedOrg: e.target.value,
                            })
                          }
                          value={applicationData.interestedOrg}
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
                            setApplicationData({
                              ...applicationData,
                              whatIsUX: e.target.value,
                            })
                          }
                          value={applicationData.whatIsUX}
                        ></textarea>
                      </div>
                      <div className="col-span-2"></div>

                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="block mb-6">
                          How do you think user experience applies in your
                          current degree program and interests?
                        </label>
                        <textarea
                          className="w-full p-2"
                          rows={5}
                          onChange={(e) =>
                            setApplicationData({
                              ...applicationData,
                              practicalityUX: e.target.value,
                            })
                          }
                          value={applicationData.practicalityUX}
                        ></textarea>
                      </div>
                      <div className="col-span-2"></div>

                      <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                        <label className="inline-block mb-6">
                          What department/s are you interested in?
                        </label>
                        <span className="ml-2 inline-block text-red-500 text-sm">
                          {deptTextHelper}
                        </span>{" "}
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            setCheckedDept({
                              ...checkedDept,
                              Design: !checkedDept.Design,
                            })
                          }
                          value={checkedDept.Design}
                        >
                          Design
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            setCheckedDept({
                              ...checkedDept,
                              Development: !checkedDept.Development,
                            })
                          }
                          value={checkedDept.Development}
                        >
                          Development
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            setCheckedDept({
                              ...checkedDept,
                              Externals: !checkedDept.Externals,
                            })
                          }
                          value={checkedDept.Externals}
                        >
                          Externals
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            setCheckedDept({
                              ...checkedDept,
                              "Internal Growth":
                                !checkedDept["Internal Growth"],
                            })
                          }
                          value={checkedDept["Internal Growth"]}
                        >
                          Internal Growth
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            setCheckedDept({
                              ...checkedDept,
                              Marketing: !checkedDept.Marketing,
                            })
                          }
                          value={checkedDept.Marketing}
                        >
                          Marketing
                        </FormCheckbox>
                        <FormCheckbox
                          type="departments"
                          onChange={(e) =>
                            setCheckedDept({
                              ...checkedDept,
                              Research: !checkedDept.Research,
                            })
                          }
                          value={checkedDept.Research}
                        >
                          Research
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
                          disabled={deptTextHelper !== "" || emailFetching}
                          className={`font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green ${
                            deptTextHelper === "" && !emailFetching
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
                  We will be announcing the date for our membership application.
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
      display: settings.display_application_form,
    },
  };
}
