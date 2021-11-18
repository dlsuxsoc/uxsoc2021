import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "../../data/navigation.json";
import NavItem from "../NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navigation = ({ active }) => {
    const [sidebar, toggleSidebar] = useState(false);

    return (
        <>
            <div className={`${styles.container} px-4 sm:px-32 py-2 flex flex-row justify-between items-center`}>
                <Link href="/">
                    <a className="hidden md:block">
                        <Image src={"/images/nav-logo.png"} alt="UXSOC Navigation Logo" width="136px" height="52px" />
                    </a>
                </Link>
                <Link href="/">
                    <a className="block md:hidden">
                        <Image
                            src={"/images/nav-logo-mobile.png"}
                            className="block md:hidden"
                            alt="UXSOC Navigation Logo"
                            width="52px"
                            height="52px"
                        />
                    </a>
                </Link>

                <ul className="list-none hidden md:block">
                    {data.map((item, index) => (
                        <NavItem active={index == active} key={index} name={item.name} link={item.link} />
                    ))}
                </ul>

                <div className="block md:hidden">
                    <GiHamburgerMenu size="32px" color="gray" onClick={() => toggleSidebar(true)} />
                    {sidebar ? (
                        <div className={`absolute w-full h-full left-0 top-0 z-10 ${styles.sidebar}`}>
                            <FaTimes
                                size="32px"
                                color="gray"
                                className="absolute right-0 mr-4 mt-4"
                                onClick={() => toggleSidebar(false)}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            {/* <div className={`${styles.spacer}`}></div> */}
        </>
    );
};

export default Navigation;
