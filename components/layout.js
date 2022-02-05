import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop/ScrollToTop"
const Layout = ({ children, active, special }) => {
    return (
        <>
            <Navigation active={active} special={special} />
            <main id="main">{children}</main>
            <ScrollToTop/>
            <Footer />
        </>
    );
};

export default Layout;
