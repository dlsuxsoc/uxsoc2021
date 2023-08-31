import React from "react";
import FormInput from "./FormInput";
import FormDate from "./FormDate";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";
import FormEmail from "./FormEmail";

const Field = ({ type, fieldProps }) => {
  switch (type) {
    case "radio":
      return <FormRadio {...fieldProps} />;
    case "date":
      return <FormDate {...fieldProps} />;
    case "textarea":
      return <FormTextArea {...fieldProps} />;
    case "checkbox":
       return <FormCheckbox {...fieldProps} />;
    case "select":
      return <FormSelect {...fieldProps} />;
    case "email":
      return <FormEmail {...fieldProps} />;
    case "text":
    default:
      return <FormInput {...fieldProps} />;
  }
};

export default Field;
