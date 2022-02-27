import React from "react";
import Button from "../../components/Button/Button";

const JoinUs = () => {
  return (
    <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">
      {/* Header*/}
      <div className="pb-3 text-center">
        <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
          Join us
        </h1>
        <p className="text-base lg:text-xl mb-4 lg:w-96">
          Apply to become a core member now!
        </p>
      </div>

      <Button id="abt-apply-btn" to="/apply">
        Apply Now
      </Button>
    </section>
  );
};

export default JoinUs;
