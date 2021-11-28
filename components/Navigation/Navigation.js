import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "../../data/navigation.json";
import NavItem from "../NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Navigation = ({ active }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <div
        className={`${styles.container} px-4 sm:px-8 lg:px-32 py-2 flex flex-row justify-between items-center relative`}
        style={{
          transition: `box-shadow .4s`,
          boxShadow: `${
            scrollTop > 100
              ? "0px 18px 45px -20px rgba(0, 0, 0, 0.2)"
              : "0px 18px 45px -20px rgba(0, 0, 0, 0)"
          }`,
        }}
      >
        <Link href="/">
          <a className="hidden sm:block">
            <Image
              src={"/images/nav-logo.png"}
              alt="UXSOC Navigation Logo"
              width="136px"
              height="52px"
            />
          </a>
        </Link>
        <Link href="/">
          <a className="block sm:hidden absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:relative sm:left-0 sm:top-0 sm:-translate-x-0 sm:-translate-y-0 px-4 sm:px-0">
            <Image
              src={"/images/nav-logo-mobile.png"}
              className="block md:hidden "
              alt="UXSOC Navigation Logo"
              width="48px"
              height="48px"
            />
          </a>
        </Link>

        <ul className="list-none hidden sm:block">
          {data.map((item, index) => (
            <NavItem
              active={index == active}
              key={index}
              name={item.name}
              link={item.link}
            />
          ))}
        </ul>

        <div className="block sm:hidden">
          <GiHamburgerMenu
            size="32px"
            className="lead-7"
            color="gray"
            onClick={() => toggleSidebar(true)}
          />
          {sidebar ? (
            <div
              className={`absolute w-full h-full left-0 top-0 z-10 ${styles.sidebar}`}
            >
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
