import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from '../../public/images/temp-event.png'


const ArticleItem = () => {
    return (
        // <div className={`${styles.container} py-4 mr-16 w-72`}>
        //     <div className="relative pd">
        //             <div className="w-96 h-72">
        //                 <Image
        //                         src={eventPicture}
        //                         alt="Placeholder"
        //                         layout="fill"
        //                         objectFit="contain"
        //                         objectPosition="center"
        //                     />
        //             </div>
        //         </div>
        //     <p className="font-bold text-lg w-full text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
        //     <p className="text-base w-full text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
        //     <p className="text-base w-full text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        //                                                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        //                                                 laboris nisi ut aliquip ex ea commodo consequat.</p>
        // </div>
        <div className="px-4 sm:px-32 flex flex-col md:flex-row">
            <div className="relative pd">
                <div className="w-96 h-56">
                    <Image
                        src={eventPicture}
                        alt="Placeholder"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                    />
                </div>
            </div>

            <div className=" md:pl-16 lg:pl-74">
                <h1 className="mb-8 sm:pd-2">Lorem Ipsum Dolor</h1>
                <p className="whitespace-nowrap">July 9-12, 2019 · 08:00am - 05:00pm</p>
                <p className="pb-8 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi </p>
            </div>

        </div>
    );
};

export default ArticleItem;
