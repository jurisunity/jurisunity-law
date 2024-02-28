// Founder.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Founder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">Associate Member</h2>
        <Slider {...settings}>
          <div>
            {/* <img className="mx-auto rounded-full w-48 h-48" src="https://via.placeholder.com/300" alt="Founder 1" /> */}
            <h3 className="text-xl font-bold mt-4">Miss. Harsapratha </h3>
            <p className="text-gray-600"> <span className='text-blue-500'>Miss. Harsapratha</span> being a law student with a passion for justice and expertise in Corporate Finance, Business Law, and Legal Drafting. Certified in Corporate Governance and Banking Law, with internship experience under a Senior Advocate. Currently pursuing B.Com.,LLB. at Bharath Institute of Law, Chennai. Strong research, communication, and analytical skills.</p>
          </div>
          <div>
            {/* <img className="mx-auto rounded-full w-48 h-48" src="https://via.placeholder.com/300" alt="Founder 2" /> */}
            <h3 className="text-xl font-bold mt-4">Mr. Navas </h3>
            <p className="text-gray-600"> <span className='text-blue-600'>Mr. Navas </span>is a devoted law student, driven by a passion for justice. He demonstrate strong research skills and a proven ability to analyze complex legal issues, showcasing a deep dedication in this field. Currently pursuing B.A.,LLB. at Bharath Institute of Law, Chennai.  Navas is committed to contributing valuable insights within a legal context..</p>
          </div>

          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Founder;
