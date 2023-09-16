import React, { useEffect, useState } from "react";
import styles from "./FormCheckbox.module.scss";
import { leadApplicationDataStore, memberApplicationDataStore } from "../../../pages/apply/store/store";

const FormCheckbox = ({ name, label, options, setFormData, formData }) => {

  const store = options.includes('Community Manager') ? leadApplicationDataStore((state) => state) : memberApplicationDataStore((state) => state)


  useEffect(() => {
    const depts = Object.keys(store.checkedDept).filter(
      (key) => store.checkedDept[key] === true
    );

    store.setApplicationData({
      ...store.applicationData,
      interestedDept: depts,
    });

    if (!depts.length) {
      store.setDeptTextHelper("(Please choose at least 1)");
    } else {
      store.setDeptTextHelper("");
    }

    // console.log(store.applicationData);
  }, [store.setCheckedDept, store.checkedDept]);

  return (
    <div className="col-start-1 col-span-12 md:col-span-8 mb-8">
      <label className="inline-block mb-6">{label}</label>
      <span className="ml-2 inline-block text-red-500 text-sm">
        {store.deptTextHelper}
      </span>{" "}
      {options.map((option, optionIndex) => {
        return (
          <div className={`${styles.container}`} key={optionIndex}>
            <input
              type={"checkbox"}
              name={name}
              checked={store.checkedDept[option]}
              onChange={(e) =>
                store.setCheckedDept({
                  ...store.checkedDept,
                  [option]: !store.checkedDept[option],
                })
              }
            />
            <span></span>
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default FormCheckbox;
