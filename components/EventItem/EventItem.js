import React from "react";
import styles from "./EventItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from '../../public/images/temp-event.png'


const EventItem = ({title, description}) => {
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
            <p className="font-bold text-lg w-full text-justify pt-6 pb-2"> {title} </p>
            <p className="text-base w-full text-justify"> {description} </p>
        </div>
    );
};

export default EventItem;
