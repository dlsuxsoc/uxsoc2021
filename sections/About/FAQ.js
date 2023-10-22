import React from "react";
import FAQItem from "../../components/FAQItem";

const FAQ = ({ faq }) => {
  return (
    <section
      className="px-4 sm:px-32 py-14 lg:py-20 flex flex-col justify-center lg:justify-between items-center h-auto bg-offwhite"
      id="faq"
    >
      <div className="w-full">
        {/* Header and Text */}
        <h1 className="text-3xl lg:text-5xl mb-6 lg:mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <div className="my-16">
          {faq.map((faqItem, index) => (
            <FAQItem key={index} {...faqItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
