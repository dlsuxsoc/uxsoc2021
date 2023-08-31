import React from "react";

const FormInput = ({
  name,
  label,
  required,
  placeholder = "",
  setFormData,
  formData,
}) => {
  return (
    <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-3 mb-4">
      <label className="block mb-6" htmlFor={name}>
        {label} <span className="italicize">{!required && "(Optional)"}</span>
      </label>
      <input
        type="text"
        name={name}
        className="form-input py-2 px-3 w-full"
        placeholder={placeholder}
        value={formData[name]}
        onChange={(e) =>
          setFormData({
            ...formData,
            [name]: e.target.value,
          })
        }
        required={required}
      />
    </div>
  );
};

export default FormInput;
