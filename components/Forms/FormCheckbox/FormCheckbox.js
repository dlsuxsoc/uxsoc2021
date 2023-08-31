import React from "react";
import styles from "./FormCheckbox.module.scss";

const FormCheckbox = ({ children, type, onChange, value }) => {
  return (
    <div className={`${styles.container}`}>
      <input
        type={"checkbox"}
        name={type}
        value={children}
        checked={value === true}
        onChange={onChange}
      />
      <span></span>
      <label htmlFor={children}>{children}</label>
    </div>
  );
};

export default FormCheckbox;
