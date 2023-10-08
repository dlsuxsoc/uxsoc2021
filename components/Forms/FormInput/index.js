import React, { useState } from "react";

const FormInput = ({
  name,
  label,
  required,
  size,
  placeholder = "",
  validation,
  setFormData,
  formData,
}) => {
  const [numberTextHelper, setNumberTextHelper] = useState("");

  const handleBlur = (e) => {
    if (String(e.target.value).trim() === "") return;

    if (validation) {
      let isMatch = String(e.target.value).match(validation["pattern"]);

      if (isMatch === null) {
        setNumberTextHelper(validation["errorMessage"]);
      } else {
        setNumberTextHelper("");
      }
    }
  };

  return (
    <div
      className={
        size === "half"
          ? "col-start-1 col-span-12 sm:col-span-6 md:col-span-3 mb-4"
          : "col-start-1 col-span-12 md:col-span-5 mb-8"
      }
    >
      <label className="block mb-6" htmlFor={name}>
        {label} <span className="italicize">{!required && "(Optional)"}</span>
      </label>
      <input
        type="text"
        name={name}
        className="form-input py-2 px-3 w-full"
        placeholder={placeholder}
        value={formData[name]}
        pattern={validation && validation.pattern}
        onChange={(e) =>
          setFormData({
            ...formData,
            [name]: e.target.value,
          })
        }
        required={required}
        onBlur={handleBlur}
      />
      <span className="text-red-500 text-sm h-16">{numberTextHelper}</span>
    </div>
  );
};

export default FormInput;
