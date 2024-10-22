import React, { useRef } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Assuming you have the logo in this path.
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const newsletterInput = useRef();
  const handleNewsletterSubmit = () => {
    event.preventDefault();
    newsletterInput.current.value = "";
  };
  return (
    <footer className="bg-[#0D1B2A] text-white py-8 px-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="Zidio Logo" className="w-24 mb-4" />
          <p className="mb-4">
            At Zidio Development, we specialize in innovative software
            solutions. Our team is dedicated to delivering high-quality
            projects, fostering professional growth, and driving technological
            advancement.
          </p>
          <Link to="/about" className="hover:underline">
            <button className="flex items-center text-blue-500 hover:text-blue-700 font-bold">
              Discover More <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul>
            <li className="mb-2 flex items-center">
              <FaArrowRight className="mr-2" />
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2 flex items-center">
              <FaArrowRight className="mr-2" />
              <Link to="/teampage" className="hover:underline">
                Our Team
              </Link>
            </li>
            <li className="mb-2 flex items-center">
              <FaArrowRight className="mr-2" />
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="mb-2 flex items-center">
              <FaArrowRight className="mr-2" />{" "}
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our Services</h4>
          <ul>
            <li className="mb-2 flex items-center service-link-items">
              <FaArrowRight className="mr-2" /> IT Solutions
            </li>
            <li className="mb-2 flex items-center service-link-items">
              <FaArrowRight className="mr-2" /> Cyber Security
            </li>
            <li className="mb-2 flex items-center service-link-items">
              <FaArrowRight className="mr-2" /> Digital Marketing
            </li>
            <li className="mb-2 flex items-center service-link-items">
              <FaArrowRight className="mr-2" /> Machine Learning
            </li>
            <li className="mb-2 flex items-center service-link-items">
              <FaArrowRight className="mr-2" /> Cloud Services
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <form action="">
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to Latest Newsletter</p>
            <div className="flex items-center mb-4">
              <input
                ref={newsletterInput}
                type="email"
                placeholder="Enter Your E-Mail"
                className="p-2 bg-gray-800 border border-gray-600 rounded text-white w-full"
              />
            </div>
            <button
              onClick={handleNewsletterSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t border-gray-600 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 @ Zidio Development. Designed by Team-8.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebook className="text-white hover:text-blue-500" />
            <FaTwitter className="text-white hover:text-blue-500" />
            <FaLinkedin className="text-white hover:text-blue-500" />
            <FaYoutube className="text-white hover:text-blue-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
