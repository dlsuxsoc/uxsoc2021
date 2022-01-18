import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import faker from "faker";
import { restrictRange } from "../helpers/restrictRange";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "../components/Button/Button";
import Link from "next/link";

import styles from "../styles/Apply.module.scss";
import FormCheckbox from "../components/FormCheckbox/FormCheckbox";
const Apply = () => {
  const [maxDate, setMaxDate] = useState("");
  const router = useRouter();

  // const [applicationData, setApplicationData] = useState({
  //   firstName: "Alyssa",
  //   lastName: "Palmares",
  //   nickname: "Alyssa",
  //   mOB: 12,
  //   dOB: 14,
  //   yOB: 2001,
  //   pronoun: "She/ Her",
  //   customPronoun: "",
  //   email: "alyssa_palmares@dlsu.edu.ph",
  //   contactnum: "639293397767",
  //   college: "De La Salle University - Manila",
  //   program: "Bachelor of Science in Computer Science",
  //   hobbies:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus veniam repellat, dolor dolore beatae qui quaerat suscipit expedita nisi velit quam totam officia numquam aut aspernatur accusantium esse corporis.",
  //   interestedOrg:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus veniam repellat, dolor dolore beatae qui quaerat suscipit expedita nisi velit quam totam officia numquam aut aspernatur accusantium esse corporis.",
  //   interestedDept: [],
  // });

  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    mOB: "",
    dOB: "",
    yOB: new Date().getUTCFullYear() - 16,
    pronoun: "",
    customPronoun: "",
    email: "",
    contactnum: "",
    college: "",
    program: "",
    hobbies: "",
    interestedOrg: "",
    interestedDept: [],
  });

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

    //    console.log(num);
    return () => {};
  }, [applicationData.mOB, applicationData.yOB, maxDate]);

  useEffect(() => {
    setApplicationData({
      ...applicationData,
      interestedDept: Object.keys(checkedDept).filter(
        (key) => checkedDept[key] === true
      ),
    });
    // console.log(applicationData);
  }, [setCheckedDept, checkedDept]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(applicationData);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const res = await axios.post(
      "/api/addMembershipApplication",
      applicationData
    );
    //console.log(res);
    if (res.status === 201) {
      router.push("?status=success", undefined, { shallow: true });
    } else {
      router.push("?status=fail", undefined, { shallow: true });
    }
  };

  return (
    <Layout active={6}>
      <SEO title={"Membership Application"} />
      <div className="hidden md:block fixed right-0 top-0 bg-green  md:w-64 z-0 lg:w-96 h-screen">
        {/* <Image
          src={faker.image.image()}
          alt="Placeholder-Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}
      </div>
      {/* APPLICATION WAS SUBMITTED */}
      {router.query.status ? (
        <section className="px-4 sm:px-8 lg:px-32 pt-32 min-h-screen">
          <div className="mb-24 w-full grid grid-cols-12 gap-2">
            <div className="col-start-1 col-end-12">
              <h1 className="text-black text-2xl md:text-3xl lg:text-5xl mb-6 lg:mb-12">
                {router.query.status === "success"
                  ? "Application Submitted"
                  : "Something Went Wrong"}
              </h1>
            </div>
            <div className="col-start-1 col-end-12 md:col-end-8">
              <p className="text-base lg:text-2xl leading-loose mb-4">
                {router.query.status === "success" ? (
                  <>🥳 Congratulations </>
                ) : (
                  <>🥺 Sorry </>
                )}
                {applicationData.nickname !== ""
                  ? applicationData.nickname
                  : applicationData.firstName}
                ,
              </p>
              <p className="text-base lg:text-2xl leading-loose mb-4">
                {router.query.status === "success" ? (
                  <>
                    The application was successfully submitted. Sit tight while
                    the team is reviewing your application. We will be
                    contacting you through the email or the contact number you
                    have provided.
                  </>
                ) : (
                  <>
                    It looks like we are having issues processing your
                    application. Please try again later. If this problem
                    persists, you may try contacting us through our email at{" "}
                    <Link href={"mailto:dlsuuxsociety@gmail.com"}>
                      <a className="text-blue-500">dlsuuxsociety@gmail.com</a>
                    </Link>
                    .
                  </>
                )}
              </p>
              <br />
              <br />
              <p className="text-base lg:text-2xl leading-loose mb-28">
                Sincerely, <br />
                UXSOC - DLSU Team
              </p>
              <Button to="/about">LEARN MORE ABOUT US</Button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/**Membership Application Form Section*/}

          <section className="px-4 sm:px-8 lg:px-32 pt-32 ">
            {/* Header */}
            <div className="mb-24 w-full grid grid-cols-12 gap-2">
              <div className="col-start-1 col-end-12">
                <h1 className="text-black text-2xl md:text-3xl lg:text-5xl mb-6 lg:mb-12">
                  Membership Application
                </h1>
              </div>
              <div className="col-start-1 col-end-12 md:col-end-8">
                <p className="text-base lg:text-2xl leading-loose mb-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi
                </p>
                <p className="text-base lg:text-xl">* Optional</p>
              </div>
            </div>
          </section>
          {/** Actual Form */}
          <form action="POST" onSubmit={handleSubmit}>
            <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
              {/** Personal Information Section */}
              <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                Personal Information
              </h2>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                  <label className="block mb-6" htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input py-2 px-3 w-full"
                    placeholder="Donald Arthur"
                    value={applicationData.firstName}
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                  <label className="block mb-6" htmlFor="lastName">
                    Last Name*
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
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                  <label className="block mb-6">Nickname</label>
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
                <div className=" col-span-12 sm:col-span-6 md:col-span-4 mb-4">
                  <label className="block mb-6">Birth Date*</label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-start-1">
                      <input
                        type="number"
                        min={1}
                        max={12}
                        className="form-input py-2 px-3 w-full"
                        placeholder="12"
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
                        type="number"
                        min={1}
                        max={maxDate}
                        className="form-input py-2 px-3 w-full"
                        placeholder="25"
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
                        type="number"
                        min={1920}
                        max={new Date().getUTCFullYear() - 16}
                        maxLength={4}
                        required
                        className="form-input py-2 px-3 w-full"
                        placeholder="2001"
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
                      className={`${
                        applicationData.pronoun === "Others"
                          ? "form-input  w-full sm:w-auto"
                          : "opacity-0"
                      } py-2 px-3`}
                      value={applicationData.customPronoun}
                      placeholder={
                        applicationData.pronoun === "Others"
                          ? "Please specify"
                          : ""
                      }
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
            <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
              <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                Where can we contact you?
              </h2>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-8">
                  <label className="block mb-6" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input py-2 px-3 w-full"
                    value={applicationData.email}
                    placeholder="don_norman@dlsu.edu.ph"
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-8">
                  <label className="block mb-6" htmlFor="contactnum">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    pattern="^(09|639)\d{9}$"
                    value={applicationData.contactnum}
                    className="form-input py-2 px-3 w-full"
                    placeholder="63xxxxxxxxx"
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        contactnum: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </section>
            {/** Academic Background Section */}
            <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
              <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                Academic Background
              </h2>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                  <label className="block mb-6" htmlFor="college">
                    College*
                  </label>
                  <select
                    value={applicationData.college}
                    className="py-2.5 px-2 w-full"
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
                    Program*
                  </label>
                  <input
                    type="text"
                    name="program"
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
            </section>
            {/** Miscellaneous Information */}
            <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
              <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
                We want to know more about you
              </h2>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
                  <label className="block mb-6">What are your hobbies?</label>
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
                    What department/s are you interested in?
                  </label>
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
                        "Internal Growth": !checkedDept["Internal Growth"],
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
            <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-span-12 md:col-span-6 mb-8">
                  <input
                    type={"submit"}
                    value={"SEND APPLICATION"}
                    className={`${styles.btn_container} font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green cursor-pointer`}
                  />
                </div>
              </div>
            </section>
          </form>
        </>
      )}
    </Layout>
  );
};

export default Apply;
