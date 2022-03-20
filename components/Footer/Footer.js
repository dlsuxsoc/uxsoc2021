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
      className={`${styles.container} pt-20 pb-12 px-4 sm:px-8 lg:px-32  flex flex-wrap`}
    >
      <div className="w-full mb-8">
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
        <ul className="list-none w-full flex flex-wrap justify-center mb-6 z-10">
          {data.map((item, index) => {
            return (
              <li
                className="mr-3 ml-3 lg:mr-0 lg:ml-12 lg:mb-10 whitespace-nowrap text-center sm:text-right w-full sm:w-auto mb-4"
                key={index}
              >
                <Link href={item.link}>
                  <a id={`footer${item.name}`}>{item.name}</a>
                </Link>
              </li>
            );
          })} 
          <ul className="list-none w-full flex justify-center mb-2 mt-2">
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
        </ul>
        <div className="block text-center lg:text-center"> 
            <p className="mb-8">© 2021 User Experience Society - DLSU</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
