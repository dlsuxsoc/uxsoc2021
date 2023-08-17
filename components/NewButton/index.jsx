import React from "react";
import Spinner from "../Spinner";

const NewButton = ({ children, loading, onClick }) => {
  return (
    <button
      className="rounded bg-white px-4 py-2 text-green flex items-center"
      onClick={onClick}
    >
      {loading && <Spinner size="sm" />}
      {loading ? "Loading..." : children}
    </button>
  );
};

export default NewButton;
