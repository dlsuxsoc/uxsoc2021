import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from '../../public/images/temp-event.png'
import faker from 'faker';


const ArticleItem = ({title, description, date}) => {
    return (
        <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-28 flex flex-col lg:flex-row justify-center lg:justify-between h-auto">
            {/* Image */}
            <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20">
                <Image
                    src={faker.animal.dog()}
                    alt="Placeholder"
                    width={489}
                    height={311}
                />
            </div>

            {/* Header and Text */}
            <div className="w-full lg:w-1/2  lg:pb-0">
                <h1 className="text-black text-3xl lg:text-4xl mb-6 lg:mb-12">{title}</h1>
                <p className="text-sm lg:text-base mb-4">{date}</p>
                <p className="text-sm lg:text-base mb-4">{description}</p>
            </div>
        </section>
    );
};

export default ArticleItem;
