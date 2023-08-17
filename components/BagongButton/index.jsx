import React from "react";
import Spinner from "../Spinner";

const BagongButton = ({ loading, color = "white", onClick, children }) => {
  let colorMapping = {
    green: "bg-green text-white",
    red: "bg-red-50",
    white: "bg-white text-green",
  };

  return (
    <button
      className={`py-4 px-8 ${colorMapping[color]} flex items-center rounded`}
      onClick={onClick}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default BagongButton;
