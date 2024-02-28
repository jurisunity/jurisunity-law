// ContactSection.js

import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { init } from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const SignupSchema = Yup.object().shape({
    user_name: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    user_email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleSubmitform = (value) => {
    console.log(value);

    emailjs
      .sendForm("service_7gm38cg", "template_zdq0rf6", form.current, {
        publicKey: "_pat6VP2LDnUF55Mg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(
            "Dear User, your request was send to our Team.We will connect soon"
          );
          formik.resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      user_name: "",
      user_email: "",
      user_mobile: "",
      user_education: "",
      message: "",
    },
    onSubmit: (values) => {
      handleSubmitform(values);
    },
  });
  return (
    <section className="bg-gray-100 py-20">
      {" "}
      <ToastContainer />
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Have a question or want to learn more about our services? Send us
              a message!
            </p>
            <p className="text-gray-600 mb-4">
              Send your interested mail or CV at{" "}
              <span className="text-cyan-950 underline">
                {" "}
                <a href="mailto:jurisunity.inlaw@gmail.com">
                  jurisunity.inlaw@gmail.com
                </a>{" "}
              </span>
            </p>
            <form ref={form} onSubmit={formik.handleSubmit}>
              <input
                className="block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 mb-4 focus:outline-none focus:bg-white focus:border-blue-500"
                type="text"
                name="user_name"
                placeholder="Your Name"
                onChange={formik.handleChange}
                value={formik.values.user_name}
              />
              <input
                className="block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 mb-4 focus:outline-none focus:bg-white focus:border-blue-500"
                type="email"
                name="user_email"
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.user_email}
              />
              <input
                className="block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 mb-4 focus:outline-none focus:bg-white focus:border-blue-500"
                type="tel"
                name="user_mobile"
                placeholder="Your Mobile Number"
                onChange={formik.handleChange}
                value={formik.values.user_mobile}
              />
              <input
                className="block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 mb-4 focus:outline-none focus:bg-white focus:border-blue-500"
                type="text"
                name="user_education"
                placeholder="Your Education"
                onChange={formik.handleChange}
                value={formik.values.user_education}
              />
              <textarea
                className="block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 mb-4 focus:outline-none focus:bg-white focus:border-blue-500"
                rows="4"
                name="message"
                placeholder="Your Message(Eg. Interested in Internship program or Interested in Certified Course( with course name)) "
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onSubmit={formik.handleSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Our Location</h3>
            <p className="text-gray-600 mb-4">
              123 Street, City Name,
              <br />
              Country, Postal Code
            </p>
            <iframe
              className="w-full h-64"
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2790541042476!2d106.66017231539373!3d10.762387562688303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36383f1b89%3A0x6eb480a07316db54!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2suk!4v1599797026485!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// const ContactSection = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_7gm38cg', 'template_zdq0rf6', form.current, {
//         publicKey: '_pat6VP2LDnUF55Mg',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default ContactSection
