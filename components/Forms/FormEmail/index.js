import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { emailExists } from "../../../helpers/emailExists";

const FormEmail = ({
    name,
    label,
    placeholder,
    required,
    setFormData,
    formData
}) => {
    const [emailFetching, setEmailFetching] = useState(false);
    const [emailTextHelper, setEmailTextHelper] = useState("");

    return (
        <div className="col-start-1 col-span-12 sm:col-span-6 md:col-span-5 mb-8">
            <label className="block mb-6" htmlFor={name}>
                {label}
            </label>
            <input
                type="email"
                name={name}
                required={required}
                className="form-input py-2 px-3 w-full"
                value={formData[name]}
                placeholder={placeholder}
                onChange={(e) => {
                setEmailFetching(false);

                setFormData({
                    ...formData,
                    [name]: e.target.value.toLowerCase(),
                });
                setEmailTextHelper("");
                }}
                onBlur={async (e) => {
                if (formData[name] !== "") {
                    setEmailFetching(true);
                    e.target.setCustomValidity("Still validating.");

                    const res = await axios.get(
                    "/api/getMembershipEmails"
                    );
                    setEmailFetching(false);
                    // const invalid = res.data.includes(applicationData.email);
                    const invalid = emailExists(
                        formData[name],
                        res.data
                    );

                    if (invalid) {
                    setEmailTextHelper(
                        "This email was already used for an application."
                    );
                    e.target.setCustomValidity(
                        "This email was already used for an application."
                    );
                    } else {
                    setEmailTextHelper("");
                    e.target.setCustomValidity("");
                    }
                }
                }}
            />
            {emailFetching ? (
                <Oval color="gray" height={24} width={24} />
            ) : (
                <span className="text-red-500 text-sm h-16">
                {emailTextHelper}
                </span>
            )}
        </div>
    )
}

export default FormEmail;