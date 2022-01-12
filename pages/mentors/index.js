import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import faker from "faker";
import Button from "../../components/Button/Button";

export default function Index() {
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

                    {/*Mentors*/}
                    <div className="grid grid-cols-3 gap-10">
                        <div className="flex flex-col">
                            <div className="text-center relative w-60 h-60">
                                <Image
                                    className="rounded-full shadow-sm"
                                    src={faker.image.image()}
                                    alt="Placeholder-Event"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div>
                                <h2 className="text-black text-xl">Mentor's Name</h2>
                                <p className="text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>

                            <div className="text-gray text-base">
                                <h3 className="text-gray text-base">Available Times</h3>

                                {/* Times Container */}
                                <div>
                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Monday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Wednesday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-center relative w-60 h-60">
                                <Image
                                    className="rounded-full shadow-sm"
                                    src={faker.image.image()}
                                    alt="Placeholder-Event"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div>
                                <h2 className="text-black text-xl">Mentor's Name</h2>
                                <p className="text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>

                            <div className="text-gray text-base">
                                <h3 className="text-gray text-base">Available Times</h3>

                                {/* Times Container */}
                                <div>
                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Monday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Wednesday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-center relative w-60 h-60">
                                <Image
                                    className="rounded-full shadow-sm"
                                    src={faker.image.image()}
                                    alt="Placeholder-Event"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div>
                                <h2 className="text-black text-xl">Mentor's Name</h2>
                                <p className="text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>

                            <div className="text-gray text-base">
                                <h3 className="text-gray text-base">Available Times</h3>

                                {/* Times Container */}
                                <div>
                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Monday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Wednesday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-center relative w-60 h-60">
                                <Image
                                    className="rounded-full shadow-sm"
                                    src={faker.image.image()}
                                    alt="Placeholder-Event"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div>
                                <h2 className="text-black text-xl">Mentor's Name</h2>
                                <p className="text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>

                            <div className="text-gray text-base">
                                <h3 className="text-gray text-base">Available Times</h3>

                                {/* Times Container */}
                                <div>
                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Monday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Wednesday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-center relative w-60 h-60">
                                <Image
                                    className="rounded-full shadow-sm"
                                    src={faker.image.image()}
                                    alt="Placeholder-Event"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div>
                                <h2 className="text-black text-xl">Mentor's Name</h2>
                                <p className="text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>

                            <div className="text-gray text-base">
                                <h3 className="text-gray text-base">Available Times</h3>

                                {/* Times Container */}
                                <div>
                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Monday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Wednesday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-center relative w-60 h-60">
                                <Image
                                    className="rounded-full shadow-sm"
                                    src={faker.image.image()}
                                    alt="Placeholder-Event"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div>
                                <h2 className="text-black text-xl">Mentor's Name</h2>
                                <p className="text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>

                            <div className="text-gray text-base">
                                <h3 className="text-gray text-base">Available Times</h3>

                                {/* Times Container */}
                                <div>
                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Monday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>

                                    <div className="flex flex-row">
                                        <p className="w-1/2 text-left">Wednesday</p>
                                        <p className="w-1/2 text-right">00:00 - 23:59</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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