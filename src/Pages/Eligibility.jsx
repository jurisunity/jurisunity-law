import React from "react";

const InternshipOpportunity = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">
          InternshipOpportunity
        </h2>
        <h3 className="text-lg text-gray-800">
          Intership Opportunity at Adv. Verrapilai, Online platform.
        </h3>
        <div>
          <ul>
            <li className="text-base text-blue-500">
              {" "}
              <span className="text-lg text-orange-400">Role -</span> Legal
              Research Assistant.
            </li>
            <li className="text-base text-blue-500">
              {" "}
              <span className="text-lg text-orange-400">Apply-</span>
              Send your interested mail or CV at jurisunity.inlaw@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InternshipOpportunity;
