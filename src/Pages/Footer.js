// Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold underline">Follow Us:</h4>
          <div className="flex mt-2">
            <a href="#" className="mr-4">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-white hover:text-blue-500 transition duration-300"
              />
            </a>
            <a href="#" className="mr-4">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="text-white hover:text-blue-400 transition duration-300"
              />
            </a>
            <a href="#" className="mr-4">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-white hover:text-pink-500 transition duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-2/4">
          <p>
            This website is for informational purposes only and does not
            constitute legal advice or create an attorney-client relationship.*
          </p>
        </div>
        <div className="w-2/4 mt-3 md:mt-0">
          <h2 className="text-lg text-fuchsia-400">Registration Details:</h2>
          <p>
            Interested students can send mail to jurisunity.inlaw@gmail.com with
            the subject name.
          </p>
        </div>

        <div className=" mt-3 md:mt-0">
          <h2 className="text-lg text-fuchsia-400">Contact info.</h2>
          <p> Mail:<a href="mailto:jurisunity.inlaw@gmail.com">jurisunity.inlaw@gmail.com</a>  </p>
        </div>
      </div>
      <div>
        <p className="text-sm text-red-700 text-end mt-5">
          © 2024 My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
