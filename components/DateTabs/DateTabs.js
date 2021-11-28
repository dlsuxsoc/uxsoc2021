import ReactDOM from "react-dom";
import React from "react";
import styles from "./DateTabs.module.scss";

const DateTabs = ({ active, year, set}) => {
  return (
    <button
      className={`${styles.dates} block w-full text-left`}
      onClick={() => {
        set(year);
      }}
    >
      <p className={`${styles.date} ${active ? styles.active : ""}`}>{year}</p>
    </button>
  );
};

export default DateTabs;
