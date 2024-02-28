import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import internship from "../Assets/Student-Internship.jpg";
import internship1 from "../Assets/document-marketing-strategy-business-concept_53876-124278.jpg";
const InternshipOpportunity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <section className="bg-gray-200 py-2 md:py-20 grid md:grid-cols-12 ">
      <div className="col-span-6 p-5">
        {/* <Slider {...settings}> */}
        <div className="grid grid-cols-6">
          <div className="p-5 h-[10rem] col-span-3">
            <img
              src={internship}
              alt="intership opertunity"
              className="h-[10rem]"
            />
          </div>
          <div className="p-5 col-span-3">
            <img
              src={internship1}
              alt="intership opertunity"
              className="h-[10rem]"
            />
          </div>
        </div>

        {/* </Slider> */}
      </div>
      <div className="container mx-auto text-center col-span-6">
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
