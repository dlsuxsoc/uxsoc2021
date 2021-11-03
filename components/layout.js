import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
const Layout = ({ children, active, special }) => {
    return (
        <>
            <Navigation active={active} special={special} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
