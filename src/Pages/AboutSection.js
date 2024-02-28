// AboutSection.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutImg from "../Assets/lawyer-desk-byyvgpisoi6lwdez (1).jpg";
import AboutImg1 from "../Assets/desktop-wallpaper-law-firm-ceo-achieves-success (1).jpg";
import AboutImg2 from "../Assets/900052379.jpg";
import AboutImg3 from "../Assets/Pro-Bono-GettyImages-1334287414.jpg";

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-center p-5">
          <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0 " >
            <Slider {...settings}>
              <img
                className="rounded-lg shadow-md object-cover h-[15rem] md:h-[20rem]"
                src={AboutImg}
                alt="About"
              />
              <img
                className="rounded-lg shadow-md object-cover md:h-[20rem] h-[15rem]"
                src={AboutImg1}
                alt="About"
              />
              <img
                className="rounded-lg shadow-md object-cover md:h-[20rem] h-[15rem]"
                src={AboutImg2}
                alt="About"
              />
              <img
                className="rounded-lg shadow-md object-cover md:h-[20rem] h-[15rem]"
                src={AboutImg3}
                alt="About"
              />
            </Slider>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">
              About Us
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              As the founder of Juris Unity,
              <span className="text-blue-500">
                {" "}
                Adv. K. Veerapillai, M.A.,BL.
              </span>
              , brings over 38 years of experience as a practicing Advocate
              based in Karaikal, Puducherry. He has served as a Special Public
              Prosecutor (POCSO) in the Government of Puducherry, Commissioner
              of Oath, Mediator, and has been actively involved in legal
              awareness programs. He has also been a Member of the Duty Council
              in the Legal Services Authority of the Government of Puducherry at
              Karaikal. His expertise extends to serving as an ex-President and
              Secretary of JCI (Junior Chamber of International) and as a Legal
              Advisor to banking institutions.
            </p>
            <p className="text-lg text-gray-600">
              <span className="text-blue-500">Adv. K. Veerapillai</span> is
              known for his unwavering dedication to justice and legal
              excellence. His vast experience is matched by his compassionate
              approach, making him a sought-after advisor and advocate. He is
              respected for his integrity, strong leadership, and commitment to
              community service, embodying the highest standards of
              professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
