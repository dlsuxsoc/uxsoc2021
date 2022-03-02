import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

/**
 * SAMPLE USE:
 * <Button>Green</Button> - renders green button with no link
 * <Button variant="white">White</Button> - renders white button with no link
 * <Button variant="green" to="/about">Green to About</Button> - renders green button with link to about page
 *
 */

// set default variant to greem and link to #
const Button = ({ children, variant = "green", to = "#", className ="", size="base", id="", eventHandler= ()=>{} }) => {
  const color = {
    green: "text-white bg-green",
    white: "text-green bg-white",
  };

  const scaling = {
    base: "py-4 px-12 h-14 max-h-14 text-base font-bold",
    sm: "py-2 px-6 text-sm font-semibold"
  }

  return (
    <Link href={to}>
      <a
        onClick={eventHandler}
        id={id}
        className={`${styles.container} inline-block text-center h-auto rounded-md w-full sm:w-auto ${scaling[size]} ${color[variant]} ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
