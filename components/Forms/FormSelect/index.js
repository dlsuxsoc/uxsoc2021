import React from "react";

const FormSelect = ({
    name,
    label,
    prompt,
    required,
    options,
    size,
    setFormData,
    formData,
  }) => {
    return (
        <div className= {size === "half" ? "col-start-1 col-span-12 sm:col-span-6 md:col-span-3 mb-4" : "col-start-1 col-span-12 md:col-span-5 mb-8"}>
            <label className="block mb-6" htmlFor={name}>
                {label} <span className="italicize">{!required && "(if applicable)"}</span>
            </label>
            <select
                name={name}
                value={formData[name]}
                className="py-2.5 px-2 w-full"
                required={required}
                style={{ backgroundColor: "#ECECEC" }}
                onChange={(e) =>
                        setFormData({
                        ...formData,
                        [name]: e.target.value,
                    })
                }
            >
                {options.map((option, optionIndex) => {
                    return(
                        <option value={option}>
                            {option === "" ? "Please select your " + prompt : option}
                        </option>
                    )
                })}
            </select>
        </div>
    )
  };

  export default FormSelect;