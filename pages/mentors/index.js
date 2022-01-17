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

                                    <div>
                                        <h2 className="text-black text-xl">{item.Name}</h2>
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