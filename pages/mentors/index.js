import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import mentorsData from "../../data/dummy-mentors.json"
import faker from "faker";
import Button from "../../components/Button/Button";
import { truncateString } from "../../helpers/truncateString";

export default function Index() {
    //const router = useRouter(); //TODO: idk
    const [bookingData, setBookingData] = useState({
        bookingMentor: "",
        bookingDate: "",
        bookingSlot: "",
        firstName: "",
        lastName: "",
        nickname: "",
        contactNum: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(bookingData);
        window.scrollTo({ top: 0, behavior: "smooth" });
    
        const res = await axios.post(
          "/api/addMembershipApplication", // TODO: Change
          bookingData
        );
        //console.log(res);
        if (res.status === 201) {
          //router.push("?status=success", undefined, { shallow: true }); //TODO: router related
        } else {
          //router.push("?status=fail", undefined, { shallow: true }); //TODO: router related
        }
      };

    return(
        <Layout active={5}>
            <SEO title={"Mentors"}/>
            {/* Our Mentors */}
            <section className="px-4 sm:px-8 lg:px-32 py-2 mt-36 mb-16 lg:mb-36 justify-center lg:justify-between items-center h-auto">
                {/* Header */}
                <div className="text-center pb-2">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
                        Our mentors
                    </h1>
                    <p className="text-base lg:text-lg 2xl:text-xl mb-6 lg:mb-12 lg:w-1/2 mx-auto">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                        aliquam erat volutpat. Ut wisi
                    </p>

                    {/*Mentors Container*/}
                    <div className="flex flex-row flex-wrap gap-10 justify-center">
                        {/* Mentor */}
                        {mentorsData.map((item,index)=> {
                            return (
                                <div className="w-full md:w-1/3 lg:w-1/4" key={index}>
                                    {/* Mentor Avatar */}
                                    <div className="mx-auto relative w-48 h-48">
                                        <Image
                                            className="rounded-full shadow-md"
                                            src={faker.image.image()}
                                            alt="Placeholder-Mentor"
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <h2 className="text-black text-xl">{item.Name}</h2>
                                        <p className="text-base">{item.Description}</p>
                                    </div>

                                    {/* Available Times */}
                                    <div className="text-gray text-base px-8">
                                        <h3 className="text-gray text-base">Available Times</h3>

                                        {item.Slots.map((item,index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="flex flex-row justify-between">
                                                        {/* Day */}
                                                        <p className="block md:hidden xl:block">{item.Day}</p>
                                                        <p className="hidden md:block xl:hidden">{truncateString(item.Day,2)}</p>
                                                        
                                                        {/* Times */}
                                                        <div className="w-3/4">
                                                            {item.Times.map((item,index) => {
                                                                return (
                                                                    <div className="flex flex-col" key={index}>
                                                                        <p className="text-right block">
                                                                            {item.Start} - {item.End}
                                                                        </p>     
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Book a Mentor */}
            <section className="px-4 sm:px-8 lg:px-32 py-2 mt-36 mb-16 lg:mb-36 justify-center lg:justify-between items-left h-auto">
                {/* Header */}
                <div className="pb-2">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
                        Book a Mentor
                    </h1>
                </div>
                
                {/* Form */}
                <form action="POST" onSubmit={handleSubmit}>
                    <section className="flex flex-col md:flex-row justify-between mb-8">
                        {/* Left Side starts here */}
                        <div className="w-full pr-0 md:pr-4">
                            <div className="grid grid-cols-12 gap-4">
                                {/* Mentor to Book */}
                                <div className="col-start-1 col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="bookingMentor">
                                        Mentor to book*
                                    </label>
                                    <select
                                        name="bookingMentor"
                                        className="py-2.5 px-2 w-full"
                                        style={{ backgroundColor: "#ECECEC" }}
                                        onChange={(e) =>
                                            setBookingData({
                                                ...bookingData,
                                                bookingMentor: e.target.value
                                            })
                                        }
                                        value={bookingData.bookingMentor}
                                        required
                                    >
                                        <option value="" disabled selected>Please select a mentor</option>
                                        {mentorsData.map((item,index) => {
                                            return (
                                                <option value={item.Name} key={index}>{item.Name}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                {/* Date & Time */}
                                <div className="col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="bookingDate">
                                        Date and Time*
                                    </label>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-start-1">
                                            <select
                                                name="bookingDate"
                                                className="py-2.5 px-2 w-full"
                                                style={{ backgroundColor: "#ECECEC" }}
                                                onChange={(e) =>
                                                    setBookingData({
                                                        ...bookingData,
                                                        bookingDate: e.target.value
                                                    })
                                                }
                                                value={bookingData.bookingDate}
                                                required
                                            >
                                                <option value="" disabled selected>Date</option>
                                                {mentorsData.map((item,index) => {
                                                    return (
                                                        // TODO: Based on chosen mentor's timeslot
                                                        <option key={index}></option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-start-2">
                                            <select
                                                name="bookingSlot"
                                                className="py-2.5 px-2 w-full"
                                                style={{ backgroundColor: "#ECECEC" }}
                                                onChange={(e) =>
                                                    setBookingData({
                                                        ...bookingData,
                                                        bookingSlot: e.target.value
                                                    })
                                                }
                                                value={bookingData.bookingSlot}
                                                required
                                            >
                                                <option value="" disabled selected>Timeslot</option>
                                                {mentorsData.map((item,index) => {
                                                    return (
                                                        // TODO: Based on chosen mentor's timeslot
                                                        <option key={index}></option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-4">
                                {/* First Name */}
                                <div className="col-start-1 col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="firstName">
                                        First Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-input py-2 px-3 w-full"
                                        placeholder="Donald Arthur"
                                        value={bookingData.firstName}
                                        onChange={(e) =>
                                            setBookingData({
                                                ...bookingData,
                                                firstName: e.target.value,
                                        })
                                        }
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="lastName">
                                        Last Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-input py-2 px-3 w-full"
                                        placeholder="Norman"
                                        value={bookingData.lastName}
                                        onChange={(e) =>
                                            setBookingData({
                                                ...bookingData,
                                                lastName: e.target.value,
                                        })
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-12 gap-4">
                                {/* Nickname */}
                                <div className="col-start-1 col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="nickname">
                                        Nickname
                                    </label>
                                    <input
                                        type="text"
                                        name="nickname"
                                        className="form-input py-2 px-3 w-full"
                                        placeholder="Don"
                                        value={bookingData.nickname}
                                        onChange={(e) =>
                                            setBookingData({
                                                ...bookingData,
                                                nickname: e.target.value,
                                        })
                                        }
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="contactNum">
                                        Phone Number*
                                    </label>
                                    <input
                                        type="text"
                                        name="contactNum"
                                        pattern="^(09|639)\d{9}$"
                                        className="form-input py-2 px-3 w-full"
                                        placeholder="63xxxxxxxxx"
                                        value={bookingData.contactNum}
                                        onChange={(e) =>
                                            setBookingData({
                                                ...bookingData,
                                                contactNum: e.target.value,
                                        })
                                        }
                                        required
                                    />
                                </div>
                            </div>
                                
                            <div className="col-start-1 col-span-12 sm:col-span-6 mb-4 md:mb-0">
                                {/* Email */}
                                <label className="block mb-6" htmlFor="email">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input py-2 px-3 w-full"
                                    placeholder="don_norman@dlsu.edu.ph"
                                    onChange={(e) =>
                                        setBookingData({
                                            ...bookingData,
                                            email: e.target.value,
                                    })
                                    }
                                    required
                                />
                            </div>
                        </div>

                        {/* Right Side starts here */}
                        <div className="flex flex-col md:w-1/2">
                            {/* Additional Message */}
                            <label className="block mb-6" htmlFor="message">
                                Additional message
                            </label>
                            <textarea
                                name="message"
                                className="h-full p-2"
                                placeholder=""
                                
                                onChange={(e) =>
                                    setBookingData({
                                        ...bookingData,
                                        message: e.target.value
                                    })
                                }
                                value={bookingData.message}
                            ></textarea>
                        </div>
                    </section>
                </form>

                <div className="text-center">
                    <p className="pb-4 text-center text-base lg:text-lg 2xl:text-xl">
                        All information will be kept private.
                    </p>
                    <Button to="/">Book Mentor</Button>
                </div>
            </section>
        </Layout>
    );
}