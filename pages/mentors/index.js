import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import { truncateString } from "../../helpers/truncateString";
import getMentors from "../api/getMentors";
import Modal from "../../components/Modal/Modal";
import PageLoading from "../../components/PageLoading/PageLoading";
import getNextNDays from "../../helpers/getNextNDays";
import getTimeSlotsByDay from "../../helpers/getTimeSlotsByDay";

export default function Index({mentors}) {
    const router = useRouter();

    // BINDED TO DROPDOWN MENTOR NAME
    const [mentorIndex, setMentorIndex] = useState(-1);

    // modal open close
    const [toggle, toggleModal] = useState(false);

    // loading
    const [applicationSending, setApplicationSending] = useState(false);

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
        setApplicationSending(true);
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("FORM SUBMITTED");
        console.log(e.target[0].value)
        const res = await axios.post(
          "/api/addMentorshipBooking", 
          bookingData
        );

        // clearing form values
        setMentorIndex(-1);
        setBookingData({
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

        setApplicationSending(false);
        if (res.status === 201) {
            router.push("?status=success", undefined, { shallow: true });
            toggleModal(true);
        } else {
            router.push("?status=fail", undefined, { shallow: true });
        }
      };
    
    return(
        <Layout active={5}>
            <SEO title={"Mentors"}/>
            {applicationSending ? <PageLoading /> : null}

            {/* Our Mentors */}
            <section className="px-4 sm:px-8 lg:px-32 py-2 mt-28 xl:mt-36 mb-16 lg:mb-36 justify-center lg:justify-between items-center h-auto">
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
                        {mentors.map((item,index)=> {
                            return (
                                <div className="w-full md:w-1/3 xl:w-1/4" key={index}>
                                    {/* Mentor Avatar */}
                                    <div className="mx-auto relative w-48 h-48">
                                        <Image
                                            className="rounded-full shadow-md"
                                            src={item.picture}
                                            alt={item.name}
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <h2 className="text-black text-xl">{item.name}</h2>
                                        <p className="text-base">{item.description}</p>
                                    </div>

                                    {/* Available Times */}
                                    <div className="text-gray text-base w-full">
                                        <h3 className="text-gray text-base">Available Times</h3>

                                        {item.timeSlots.map((ts,index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="flex flex-row justify-between sm:px-32 md:px-0 2xl:px-16">
                                                        {/* Day */}
                                                        <p className="block md:hidden xl:block">{ts.day}</p>
                                                        <p className="hidden md:block xl:hidden">{truncateString(ts.day,2)}</p>
                                                        {/* Times */}
                                                        <div className="">
                                                            {ts.times.map((time,index) => {
                                                                return (
                                                                    <div className="flex flex-col" key={index}>
                                                                        <p className="text-right block">
                                                                            {time.start} - {time.end}
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
                    <section className="flex flex-col xl:flex-row justify-between mb-8">
                        {/* Left Side starts here */}
                        <div className="w-full pr-0 xl:pr-4">
                            <div className="grid grid-cols-12 gap-4">
                                {/* Mentor to Book */}
                                <div className="col-start-1 col-span-12 sm:col-span-6 mb-0 md:mb-4">
                                    <label className="block mb-6" htmlFor="bookingMentor">
                                        Mentor to Book
                                    </label>
                                    <select
                                        name="bookingMentor"
                                        className="py-2.5 px-2 w-full"
                                        style={{ backgroundColor: "#ECECEC" }}
                                        onChange={(e) =>{           
                                            setMentorIndex(parseInt(e.target.value));
                                            setBookingData({
                                                ...bookingData,
                                                bookingMentor: mentors[parseInt(e.target.value)].name,
                                            })
                                        }}
                                        value={mentorIndex}
                                        required
                                    >
                                        <option value={-1} disabled selected>Please select a mentor</option>
                                        
                                        {mentors.map((item,index) => {
                                            // Index = 0 to N
                                            return (
                                                <option value={index} key={index}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                {/* Date & Time */}
                                <div className="col-span-12 sm:col-span-6 mb-4">
                                    <label className="block mb-6" htmlFor="bookingDate">
                                        Date and Time
                                    </label>
                                    {/* Date */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-start-1">
                                            <select
                                                name="bookingDate"
                                                className="py-2.5 px-1.5 w-full"
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
                                                {mentorIndex !== -1 ? (getNextNDays(mentors[mentorIndex].timeSlots).map((item,index) => {
                                                    return (
                                                        <option key={index}>{item}</option>
                                                    )
                                                })) : (null)}
                                            </select>
                                        </div>
                                        
                                        {/* Time */}
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
                                                {mentorIndex !== -1 ? (getTimeSlotsByDay(mentors[mentorIndex].timeSlots,bookingData.bookingDate).map((item,index) => {
                                                    return (
                                                        <option key={index}>{item}</option>
                                                    )
                                                })) : (null)}
                                            </select>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-4">
                                {/* First Name */}
                                <div className="col-start-1 col-span-12 sm:col-span-6 mb-0 md:mb-4">
                                    <label className="block mb-6" htmlFor="firstName">
                                        First Name
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
                                        Last Name
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
                                <div className="col-start-1 col-span-12 sm:col-span-6 mb-0 md:mb-4">
                                    <label className="block mb-6" htmlFor="nickname">
                                        Nickname (optional)
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
                                        Phone Number (optional)
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
                                    />
                                </div>
                            </div>
                                
                            <div className="col-start-1 col-span-12 sm:col-span-6 mb-4 xl:mb-0">
                                {/* Email */}
                                <label className="block mb-6" htmlFor="email">
                                    Email
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
                                    value={bookingData.email}
                                    required
                                />
                            </div>
                        </div>

                        {/* Right Side starts here */}
                        <div className="flex flex-col w-full xl:w-1/2">
                            {/* Additional Message */}
                            <label className="block mb-6" htmlFor="message">
                                Additional message (optional)
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

                    {/* Submit Button */}
                    <div className="text-center">
                        <p className="pb-4 text-center text-base lg:text-lg 2xl:text-xl">
                            All information will be kept private.
                        </p>
                        <input
                            type={"submit"}
                            value={"BOOK MENTOR"}
                            className={`font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green cursor-pointer`}
                        />
                    </div>

                </form>

            </section>
            <Modal title={"Application Successful"} toggleModal={toggleModal} toggle={toggle}>
                Thank you for booking a mentor! We will reach out to you via email about your schedule once we have processed your booking.
            </Modal>
        </Layout>
    );
}

export async function getServerSideProps() {
    const mentorData = await getMentors();
    return {
        props: {
            mentors: mentorData
        },
    };
}