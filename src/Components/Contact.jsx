// import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4">Home &gt; Contact Us</p>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Write to Us Anytime</h2>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 p-3 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-1/2 p-3 border border-gray-300 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Write Message"
                className="w-full p-3 border border-gray-300 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-1/3 p-6 bg-blue-500 text-white rounded-lg shadow-lg ml-6">
          <h2 className="text-xl font-bold mb-4">Don't Forget to Contact Us</h2>
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="text-2xl mr-4" />
            <div>
              <p>Call Us</p>
              <p>+91 854 637 9265</p>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-2xl mr-4" />
            <div>
              <p>Email Us</p>
              <p>support@zidio.in</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaClock className="text-2xl mr-4" />
            <div>
              <p>Office Hours</p>
              <p>9:00 AM to 5:00 PM</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.194761402625!2d77.62882189999999!3d12.7658604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84179333b909112d%3A0x99b7aa8200259bb9!2sZidio%20Development%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1729421764028!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
