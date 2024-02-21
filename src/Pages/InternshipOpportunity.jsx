import React from "react";

const Eligibility = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">
          Eligibility
        </h2>
        <h3 className="text-lg text-gray-800">
          To ensure that participants can fully engage with and benefit from the
          programme, the following eligibility criteria have been outlined:
        </h3>
      <div>

          <ul>
            <li className="text-base text-blue-500"> <span className="text-lg text-orange-400">Students:</span> Currently enrolled in a recognized Law college or institution.</li>
            <li className="text-base text-blue-500"> <span className="text-lg text-orange-400">Teachers:</span> Currently employed as a faculty member at a recognized law college or institution.</li>
            <li className="text-base text-blue-500"> <span className="text-lg text-orange-400">Professional Advocates:</span> professional advocates who are enrolled at the Bar.</li>
          </ul>
      </div>
       
      </div>

    </section>
  );
};

export default Eligibility;
