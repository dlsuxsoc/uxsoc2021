import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "../../data/navigation.json";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className={`${styles.container} pt-20 pb-12 px-4 sm:px-8 lg:px-32  flex flex-wrap`}
    >
      <div className="w-full my-4 ">
        <div className="block">
          <div className="h-12 relative block lg:hidden text-center lg:text-center mb-4">
            <Image
              src="/images/uxsoc-footer.png"
              alt="Footer Logo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="h-12 relative hidden lg:block text-center lg:text-center mb-4">
            <Image
              id="footerLogo"
              src="/images/uxsoc-footer.png"
              alt="Footer Logo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* Page Links */}
        <ul className="list-none w-full flex flex-wrap justify-center align-center z-10">
          {data.map((item, index) => {
            return (
              <li
                className="mx-5 whitespace-nowrap text-center w-full sm:w-auto my-4"
                key={index}
              >
                <Link href={item.link}>
                  <a id={`footer${item.name}`}>{item.name}</a>
                </Link>
              </li>
            );
          })}

          {/* Socials */}
          <ul className="list-none w-full flex justify-center my-4">
            <li className="mx-3">
              <Link href={"https://www.facebook.com/uxsocietydlsu"}>
                <a id="footerFb" target={"_blank"}>
                  <FaFacebookSquare size="32px" />
                </a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href={"https://twitter.com/uxsocietydlsu"}>
                <a id="footerTwitter" target={"_blank"}>
                  <FaTwitter size="32px" />
                </a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href={"https://www.instagram.com/uxsocietydlsu"}>
                <a id="footerInstagram" target={"_blank"}>
                  <FaInstagram size="32px" />
                </a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href={"#"}>
                <a id="footerDiscord">
                  <FaDiscord size="32px" />
                </a>
              </Link>
            </li>
            <li className="mx-3">
              <Link href={"mailto:info@uxsocietytaft.org"}>
                <a id="footerMail" target={"_blank"}>
                  <MdMail size="32px" />
                </a>
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <div className="block text-center lg:text-center">
            <p className="my-4">
              © {`${new Date().getFullYear()}`} User Experience Society - DLSU
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
