import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import faker from "faker";
import { range } from "../helpers/generateArrayFromNtoN";
import { restrictRange } from "../helpers/restrictRange";
const Apply = () => {
  const months = range(1, 12, 1);
  const years = range(1970, new Date().getUTCFullYear(), 1);
  const [maxDate, setMaxDate] = useState("");

  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    mOB: "",
    dOB: "",
    yOB: new Date().getUTCFullYear() - 16,
    gender: "",
    customGender: "",
    college: "",
    program: "",
    hobbies: "",
    interestedOrg: "",
    interestedDept: "",
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

    console.log(num);
    return () => {};
  }, [applicationData.mOB, applicationData.yOB, maxDate]);

  return (
    <Layout active={-1}>
      <SEO title={"Membership Application"} />
      <div className="hidden md:block fixed right-0 top-0 bg-green  md:w-64 z-0 lg:w-96 h-screen">
        <Image
          src={faker.image.image()}
          alt="Placeholder-Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi
            </p>
            <p className="text-base lg:text-xl">* Optional</p>
          </div>
        </div>
      </section>
      <form>
        <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
          <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
            Personal Information
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
              <label className="block mb-6">First Name*</label>
              <input
                type="text"
                className="form-input py-2 px-3 w-full"
                placeholder="Alyssa"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-4">
              <label className="block mb-6">Last Name*</label>
              <input
                type="text"
                className="form-input py-2 px-3 w-full"
                placeholder="Palmares"
                required
              />
            </div>{" "}
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-4">
              <label className="block mb-6">Nickname</label>
              <input
                type="text"
                className="form-input py-2 px-3 w-full"
                placeholder="Alyssa"
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
                    placeholder="14"
                    required
                    value={parseInt(applicationData.dOB)}
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
                    min={1970}
                    max={new Date().getUTCFullYear()}
                    maxLength={4}
                    required
                    className="form-input py-2 px-3 w-full"
                    placeholder="2001"
                    value={applicationData.yOB}
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        yOB:
                          restrictRange(
                            parseInt(e.target.value),
                            applicationData.yOB,
                            1970,
                            new Date().getUTCFullYear() - 16
                          ) || "",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 md:col-span-4 mb-8">
              <label className="block mb-6">Gender</label>
              <div>
                <input
                  type="radio"
                  name="gender"
                  checked={applicationData.gender === "Female"}
                  className="form-input py-2 px-3"
                  value="Female"
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      gender: e.currentTarget.value,
                      customGender: "",
                    })
                  }
                />
                <span className="ml-2">Female</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  checked={applicationData.gender === "Male"}
                  className="form-input py-2 px-3"
                  value="Male"
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      gender: e.currentTarget.value,
                      customGender: "",
                    })
                  }
                />
                <span className="ml-2">Male</span>
              </div>
              <div className="">
                <input
                  type="radio"
                  name="gender"
                  className="form-input py-2 px-3"
                  checked={applicationData.gender === "Others"}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      gender: e.currentTarget.value,
                    })
                  }
                  value="Others"
                />
                <span className="mx-2 py-2">Others</span>
                <input
                  type="text"
                  className={`${
                    applicationData.gender === "Others"
                      ? "form-input  w-full sm:w-auto"
                      : "opacity-0"
                  } py-2 px-3`}
                  value={applicationData.customGender}
                  placeholder={
                    applicationData.gender === "Others" ? "Please specify" : ""
                  }
                  disabled={applicationData.gender !== "Others"}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      customGender: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
          <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
            Where can we contact you?
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-4 mb-8">
              <label className="block mb-6">Email*</label>
              <input
                type="email"
                className="form-input py-2 px-3 w-full"
                placeholder="alyssa_palmares@dlsu.edu.ph"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-8">
              <label className="block mb-6">Phone Number</label>
              <input
                type="text"
                pattern="^(09|639)\d{9}$"
                className="form-input py-2 px-3 w-full"
                placeholder="63xxxxxxxxx"
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
          <h2 className="text-black text-xl md:text-2xl lg:text-4xl mb-6 lg:mb-12">
            Academic Background
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
              <label className="block mb-6">College*</label>
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
              <label className="block mb-6">Program*</label>
              <input
                type="text"
                className="form-input py-2 px-3 w-full"
                placeholder="Bachelor of Science in Human-Computer Interaction"
              />
            </div>
          </div>
        </section>
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
              >
                {applicationData.hobbies}
              </textarea>
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
              >
                {applicationData.interestedOrg}
              </textarea>
            </div>
            <div className="col-span-2"></div>

            <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
              <label className="block mb-6">
                What department are you interested in?
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
              >
                {applicationData.interestedOrg}
              </textarea>
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-8 lg:px-32 pt-2 pb-16">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 md:col-span-6 mb-8">
              <input
                type={"submit"}
                value={"SEND APPLICATION"}
                className="font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green cursor-pointer"
              />
            </div>
          </div>
        </section>
      </form>
    </Layout>
  );
};

export default Apply;
