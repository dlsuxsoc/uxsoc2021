import ReactDOM from 'react-dom';
import React from 'react';
import styles from "./DateTabs.module.scss";

const DateTabs = ({ active, year}) => (
  <button className={`${styles.dates}`}  > 
    <p className={`${styles.date}`}>{year}</p>
  </button>
);

export default DateTabs;

// onClick={() => setEventItems(events.year2)}