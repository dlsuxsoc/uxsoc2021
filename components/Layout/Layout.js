import React, {useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";

const Layout = ({ children, active, special }) => {
    return (
        <>
            <Navigation active={active} special={special} />
            <main id= "main">{children}  </main>
            <ScrollToTop/>
            <Footer />
        </>
    );
};

export default Layout;
