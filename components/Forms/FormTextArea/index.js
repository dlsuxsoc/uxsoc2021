import React from "react";

const FormTextArea = ({
    name,
    label,
    resize,
    rows,
    setFormData,
    formData
}) => {
    return (
        <>
            <div className="col-start-1 col-span-12 md:col-span-5 mb-8">
                <label className="block mb-6">
                    {label}
                </label>
                <textarea
                    className= {!resize ? "w-full p-2 resize-none" : "w-full p-2"}
                    rows={rows}
                    onChange={(e) =>
                    setFormData({
                        ...formData,
                        [name]: e.target.value,
                    })
                    }
                    value={formData[name]}
                ></textarea>
            </div>
            <div className="col-span-2"></div>
        </>
    )
};

export default FormTextArea;