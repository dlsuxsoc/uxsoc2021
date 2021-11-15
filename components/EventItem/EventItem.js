import React from "react";
import styles from "./EventItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from '../../public/images/temp-event.png'


const EventItem = () => {
    return (
        <div className={`${styles.container} p-4`}>
            <Image
                src={eventPicture}
                alt="Picture of Event"
                width={260}
                height={150}
            />
            <p className="font-bold w-72"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
            <p className="font-xs w-72"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
        </div>
    );
};

export default EventItem;
