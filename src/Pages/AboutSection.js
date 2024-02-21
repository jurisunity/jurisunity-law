// AboutSection.js

import React from 'react';

const AboutSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto">
                <div className="md:flex items-center justify-center">
                    <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
                        <img
                            className="rounded-lg shadow-md"
                            src="https://via.placeholder.com/600x400"
                            alt="About"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">About Us</h2>
                        <p className="text-lg mb-4 text-gray-600">
                            As the founder of Juris Unity,<span className='text-blue-500'> Adv. K. Veerapillai, M.A.,BL.</span>, brings over 38 years of experience as a practicing Advocate based in Karaikal, Puducherry. He has served as a Special Public Prosecutor (POCSO) in the Government of Puducherry, Commissioner of Oath, Mediator, and has been actively involved in legal awareness programs.
                            He has also been a Member of the Duty Council in the Legal Services Authority of the Government of Puducherry at Karaikal. His expertise extends to serving as an ex-President and Secretary of JCI (Junior Chamber of International) and as a Legal Advisor to banking institutions.

                        </p>
                        <p className="text-lg text-gray-600">
                        <span className='text-blue-500'>Adv. K. Veerapillai</span>  is known for his unwavering dedication to justice and legal excellence. His vast experience is matched by his compassionate approach, making him a sought-after advisor and advocate. He is respected for his integrity, strong leadership, and commitment to community service, embodying the highest standards of professionalism.
                        </p>
                     
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;

