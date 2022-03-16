import React, {useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";

const Layout = ({ children, active, special }) => {
    // const router = useRouter()

    // useEffect(()=>  {
    //     router.push("/comingsoon");

    // }, [router])


    return (
        <>
            <Navigation active={active} special={special} />
            <span className={`${styles.anchor}`}></span>
            <main id= "main" >{children}  </main>
            <ScrollToTop/>
            <Footer />
        </>
    );
};

export default Layout;
