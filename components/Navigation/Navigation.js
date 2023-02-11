import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "../../data/navigation.json";
import NavItem from "../NavItem/NavItem";
import NavItemMobile from "../NavItem/NavItemMobile";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";

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
      <a
        href="#main"
        className={`${styles.skipToContent} ml-4 sm:ml-8 lg:ml-32 text-green`}
      >
        Skip to content
      </a>
      <div
        className={`${styles.container} px-4 sm:px-8 lg:px-32 py-2 flex flex-row justify-between items-center relative`}
        style={{
          transition: `box-shadow .4s`,
          boxShadow: `${
            scrollTop > 100
              ? "0px 18px 45px -20px rgba(0, 0, 0, 0.1)"
              : "0px 18px 45px -20px rgba(0, 0, 0, 0)"
          }`,
        }}
      >
        <Link href="/">
          <a className="hidden md:block">
            <Image
              id="logo"
              src={"/images/nav-logo.png"}
              alt="UXSOC Navigation Logo"
              width="136px"
              height="52px"
            />
          </a>
        </Link>
        <Link href="/">
          <a className="block md:hidden">
            <Image
              id="logo"
              src={"/images/nav-logo-mobile.png"}
              className="block md:hidden "
              alt="UXSOC Navigation Logo"
              width="48px"
              height="48px"
            />
          </a>
        </Link>

        <div className="flex flex-row justify-start items-start gap-6">
          <ul className="list-none hidden md:block">
            {data.map((item, index) => (
              <NavItem
                active={index == active}
                key={index}
                name={item.name}
                link={item.link}
              />
            ))}
          </ul>
          <Button
            id="navJoin"
            to="/apply/lead2023"
            size="sm"
            className="whitespace-nowrap -mt-1 hidden md:inline-block"
          >
            APPLY AS LEAD
          </Button>
        </div>

        <div className="block md:hidden">
          <GiHamburgerMenu
            size="32px"
            className="lead-7"
            color="gray"
            onClick={() => toggleSidebar(true)}
          />
          <div
            className={`fixed transition-all w-full h-full top-0 flex flex-col justify-center ease-in-out duration-300 ${styles.sidebar}`}
            style={{
              left: sidebar ? "0" : "100%",
            }}
          >
            <FaTimes
              size="32px"
              color="gray"
              className="absolute right-0 top-0 mr-4 mt-4"
              onClick={() => toggleSidebar(false)}
            />

            <ul className="list-none w-full block">
              {data.map((item, index) => (
                <NavItemMobile
                  active={index == active}
                  key={index}
                  name={item.name}
                  link={item.link}
                />
              ))}
              <NavItemMobile
                active={6 == active}
                name={"Join Us"}
                link={"/apply"}
              />
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.spacer}`}></div> */}
    </>
  );
};

export default Navigation;
