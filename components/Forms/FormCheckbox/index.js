import React, { useEffect, useState } from "react";
import styles from "./FormCheckbox.module.scss";

const FormCheckbox = ({ 
  name, 
  label,
  options,
  setFormData,
  formData
}) => {
  const [textHelper, setTextHelper] = useState("");
  const [checked, setChecked] = useState({});


  useEffect(() => {
    const initialChecked = Object.fromEntries(options.map(option => [option, false]));
    setChecked(initialChecked);
  }, []);

  useEffect(() => {
    const checkedOptions = Object.keys(checked).filter(
      (key) => checked[key] === true
    );

    setFormData({
      ...formData,
      interestedDept: checkedOptions
    });

    setTextHelper(checkedOptions.length ? "" : "(Please choose at least 1)");
  }, [setChecked, checked]);
  
  return (
    <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
      <label className="inline-block mb-6">
        {label}
      </label>
      <span className="ml-2 inline-block text-red-500 text-sm">
        {textHelper}
      </span>{" "}
      {options.map((option, optionIndex) => {
        return (
          <div className={`${styles.container}`}>
            <input
              type={"checkbox"}
              name={name}
              value={checked[option]}
              onChange={(e) =>
                setChecked({
                  ...checked,
                  [option]: !checked[option],
                })}
            />
            <span></span>
            <label htmlFor={option}>{option}</label>
          </div>
        )
      })}
    </div>
  );
};

export default FormCheckbox;