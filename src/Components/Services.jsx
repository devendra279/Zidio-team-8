import {
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa"; // Icons for services
// import Footer from "./Footer";
import Header from "./Header";

const Services = () => {
  return (
    <div className="bg-white">
         <Header/>
      {/* Background image with overlay */}
      <div className="relative">
        <img
          src="https://example.com/services-background.jpg" // Use the actual URL for the background image
          alt="Services Background"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Our Services</h1>
        </div>
      </div>
      {/* Service Cards */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaCloud className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Cloud Services</h3>
          <p className="text-gray-700 mb-4">
            Deliver scalable cloud solutions to enhance your business's
            flexibility and efficiency.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Cyber Security</h3>
          <p className="text-gray-700 mb-4">
            Safeguard your digital assets with tailored cybersecurity solutions.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaMobileAlt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Digital Marketing</h3>
          <p className="text-gray-700 mb-4">
            Boost your online presence with tailored digital marketing
            strategies.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-700 mb-4">
            Design and build responsive, high-performance websites using the
            latest technologies.
          </p>
          <button className="text-blue-500 font-bold">Learn More →</button>
        </div>

        {/* Add more services similarly */}
      </div>
      {/* Footer CTA */}
      <div className="bg-blue-500 py-8 mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Stay Connected with Zidio
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md mr-4"
          />
          <button className="bg-white text-blue-500 font-bold px-6 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>{" "}

    </div>
  );
};

export default Services;
