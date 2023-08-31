import React from "react";
import FormInput from "./FormInput";
import FormDate from "./FormDate";

const Field = ({ type, fieldProps }) => {
  switch (type) {
    case "radio":
      return null;
    case "date":
      return <FormDate {...fieldProps} />;
    case "text":
    default:
      return <FormInput {...fieldProps} />;
  }
};

export default Field;
