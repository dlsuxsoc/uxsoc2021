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
import {
  MdMail,
} from "react-icons/md";

const Footer = () => {
  return (
    <div
      className={`${styles.container} pt-20 pb-12 px-4 sm:px-8 lg:px-32  flex flex-wrap lg:flex-nowrap`}
    >
      <div className="w-full lg:w-1/2 mb-8">
        <div className="block lg:inline-block">
          <div className="h-12 relative block lg:hidden text-center lg:text-left mb-4">
            <Image
              src="/images/uxsoc-footer.png"
              alt="Footer Logo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="h-12 relative hidden lg:block text-center lg:text-left mb-8">
            <Image
              id="footerLogo"
              src="/images/uxsoc-footer.png"
              alt="Footer Logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className="hidden lg:block block text-center lg:text-left">
            <p className="mb-8">© 2021 User Experience Society - DLSU</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <ul className="list-none w-full flex flex-wrap sm:flex-nowrap justify-center lg:justify-end mb-8 z-10">
          {data.map((item, index) => {
            return (
              <li
                className="mr-3 ml-3 lg:mr-0 lg:ml-12 whitespace-nowrap text-center sm:text-right w-full sm:w-auto mb-4"
                key={index}
              >
                <Link href={item.link}>
                  <a id={`footer${item.name}`}>{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="list-none w-full flex justify-center lg:justify-end mb-10">
          <li className="mr-2 ml-2 lg:mr-0 lg:ml-6">
            <Link href={"https://www.facebook.com/uxsocietydlsu"}>
              <a id="footerFb" target={"_blank"}>
                <FaFacebookSquare size="32px" />
              </a>
            </Link>
          </li>
          <li className="mr-2 ml-2 lg:mr-0 lg:ml-6">
            <Link href={"https://twitter.com/uxsocietydlsu"}>
              <a id="footerTwitter" target={"_blank"}>
                <FaTwitter size="32px" />
              </a>
            </Link>
          </li>
          <li className="mr-2 ml-2 lg:mr-0 lg:ml-6">
            <Link href={"https://www.instagram.com/uxsocietydlsu"}>
              <a id="footerInstagram" target={"_blank"}>
                <FaInstagram size="32px" />
              </a>
            </Link>
          </li>
          <li className="mr-2 ml-2 lg:mr-0 lg:ml-6">
            <Link href={"#"}>
              <a id="footerDiscord">
                <FaDiscord size="32px" />
              </a>
            </Link>
          </li>
          <li className="mr-2 ml-2 lg:mr-0 lg:ml-6">
            <Link href={"mailto:dlsuuxsociety@gmail.com"}>
              <a id="footerMail" target={"_blank"}>
                <MdMail size="32px" />
              </a>
            </Link>
          </li>
        </ul>
        <div className="block lg:hidden block text-center lg:text-left">
            <p className="mb-8">© 2021 User Experience Society - DLSU</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
