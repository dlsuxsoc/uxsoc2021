import React from "react";
import styles from "./EventItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from '../../public/images/temp-event.png'


const ArticleItem = () => {
    return (
        <div className={`${styles.container} py-4 mr-16 w-72`}>
            <div className="relative w-full h-48">
                <Image
                    src={eventPicture}
                    alt="Picture of Event"
                    layout="fill"
                    objectPosition="left"
                    objectFit="cover"
                />
            </div>
            <p className="font-bold text-lg w-full text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
            <p className="text-base w-full text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
            <p className="text-base w-full text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
};

export default EventItem;
