import React from "react";

const FormRadio = ({
    name,
    label,
    required,
    options,
    followUp,
    setFormData,
    formData
  }) => {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-4">
            <label className="block mb-6">
                {label} <span className="italicize">{!required && "(Optional)"}</span>
            </label>
            {options.map((option, optionIndex) => {
                return(
                <div key={optionIndex}>
                    <input 
                        type="radio"
                        name={name}
                        required={required}
                        checked={formData[name] === option}
                        className="form-input py-2 px-3"
                        value={option}
                        onChange={((e) =>
                            setFormData({
                                ...formData,
                                [name]: e.currentTarget.value,
                                [followUp.name]: ""
                            }))
                        }
                    />
                    <span className="mx-2 py-2">{option}</span>
                    { followUp && option === followUp.condition &&
                        <input
                            type={followUp.type}
                            required
                            className={`form-input  w-full sm:w-auto py-2 px-3`}
                            value={formData[followUp.name]}
                            placeholder="Please specify"
                            disabled={formData[name] !== followUp.condition}
                            onChange={(e) =>
                                setFormData({
                                ...formData,
                                [followUp.name]: e.target.value,
                                })
                        }
                        />
                    }
                </div>
                )
            })}
        </div>
    )
  };

  export default FormRadio;