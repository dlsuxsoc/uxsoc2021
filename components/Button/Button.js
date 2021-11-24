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
const Button = ({ children, variant = "green", to = "#", className =""}) => {
  const color = {
    green: "text-white bg-green",
    white: "text-green bg-white",
  };

  return (
    <Link href={to}>
      <a
        className={`${styles.container} font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto ${color[variant]} ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
