import styles from "./ScrollToTop.module.scss"
import {FaArrowUp} from "react-icons/fa"
import {useEffect, useState} from "react"
const ScrollToTop = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const handleSmoothScrolling = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
      const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
      };
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
  

    return (
        <a href="#" className={`w-12 h-12 flex justify-center items-center rounded-full green bg-white shadow-lg fixed bottom-0 right-0 transition-all ${scrollTop > 420 ? "mr-16": "-mr-32"} mb-16 text-green ${styles.container}`} onClick={handleSmoothScrolling}>
            <FaArrowUp size="28"/>
        </a>


        );
}


export default ScrollToTop;
