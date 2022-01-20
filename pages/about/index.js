import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import servicesData from "../../data/services.json";
import faker from "faker";
import Button from "../../components/Button/Button";

export default function Index() {
    return(
        <Layout active={1}>
            <SEO title={"About Us"} />

            {/* About UX */}
            <section className="px-4 sm:px-32 py-2 mt-28 md:mt-8 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-screen">    
                {/* Header and Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-20 pb-3 lg:pb-0 mb-8">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">UX Society</h1>
                    <p className="text-base lg:text-lg 2xl:text-2xl mb-4">
                        The UX Society - DLSU Chapter is one of the many recognized UX Societies in the same network. 
                        There's UX Society ADMU, Davao, Orange County and the latest, UX Society AIM-Chapter.
                    </p>
                    <p className="text-base lg:text-lg 2xl:text-2xl mb-4">
                        UX Society - DLSU aids various organizations by creating quality products and services by applying 
                        principles, concepts and methodologies in such strategies. We hold workshops, seminars and conferences 
                        to train members about the essentials skills of proper UX discipline and methodologies.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 pb-2 lg:pb-0 text-center">
                    <Image
                        src="/images/home-1.png"
                        alt="Sketch-About"
                        width={489}
                        height={311}
                    />
                </div>
            </section>

           {/* Mission-Vision */}
           <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">    
                <div className="flex flex-col text-center">
                    {/* Image */}
                    <div className="relative h-48 md:h-64 lg:h-52 2xl:h-72 mb-6 lg:mb-12">
                        <Image
                            src="/images/mission-vision-1.png"
                            alt="Placeholder-About"
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                        />
                    </div>
                    
                    {/* Header and Text */}
                    <div className="pb-3 lg:pb-0 mb-8">
                        <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">The Mission-Vision</h1>
                        
                        <div className="md:w-96 mx-auto">
                            <p className="text-base lg:text-xl mb-4">
                                To create a community of Lasallian User Experience Designers and enthusiasts through 
                                User Experience Education and the creation of a distinct User Experience Culture within 
                                the university.
                            </p>
                            <p className="text-base lg:text-xl mb-4">
                                UX Society envisions to be DLSU's premier consulting and educational body for User  
                                Experience Strategy, particularly in technologies that enhance usability, guide 
                                human-computer interaction, and showcase effective visual design.
                            </p>
                        </div>
                    </div>
                </div>
            </section> 

            {/* Services */}
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">    
                {/* Header*/}
                <div className="pb-3 lg:pb-0">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">Our services</h1>
                </div>
                {/* Service Container*/}
                <section className="flex flex-col items-center w-full md:justify-center">
                    {/* Service */}
                    {servicesData.slice(0,3).map((item,index)=> {
                        return (
                            <div className={`2xl:px-72 pb-2 flex flex-col md:flex-row items-center justify-center w-full`} key={index}>
                                <div className="p-24 mr-0 md:mr-28 relative h-24 md:h-36 lg:h-44 2xl:h-72">
                                    <Image
                                        src={item.Image}
                                        alt="Placeholder-Event"
                                        layout="fill"
                                        objectFit="contain"
                                        objectPosition="center"
                                    />
                                </div>

                                {/* Services Text */}
                                <div className="w-1/2 flex flex-col text-center md:text-left">
                                    <h2 className="text-black text-base lg:text-xl 2xl:text-2xl my-4">
                                        {item.Title}
                                    </h2>
                                    <p className="break-words text-base xl:text-lg 2xl:text-xl mb-4">
                                        {item.Content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>

            {/* Join Us */}
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">    
                {/* Header*/}
                <div className="pb-3 text-center">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">Join us</h1>
                    <p className="text-base lg:text-xl mb-4 lg:w-96">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                    </p>
                </div>
                
                <Button to="/apply">Apply Now</Button>
            </section>
        </Layout>
    );
}