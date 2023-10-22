import React from "react";

const FAQItem = ({ question, answer }) => {
  return (
    <details className="w-full border-green border-2 p-4 mb-4 relative rounded-lg">
      <summary className="font-semibold text-lg">{question}</summary>
      <p>{answer}</p>
    </details>
  );
};

export default FAQItem;
