import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Top = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50); // Adjust this threshold if needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-all duration-300 ${isScrolled ? 'bg-blue-600' : 'bg-transparent'} text-white py-2 fixed w-full z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Location and Email */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {/* Google Maps link */}
            <FaMapMarkerAlt className="mr-1" />
            <a 
              href="https://www.google.com/maps/place/Zidio+Development+Pvt.+Ltd/@12.7658604,77.6288219,17z/data=!3m1!4b1!4m6!3m5!1s0x84179333b909112d:0x99b7aa8200259bb9!8m2!3d12.7658604!4d77.6288219!16s%2Fg%2F11w4lqf2zt?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              Bengaluru, Karnataka, India
            </a>
          </div>
          <div className="flex items-center">
            {/* Email link */}
            <FaEnvelope className="ml-4 mr-1" />
            <a 
              href="mailto:support@zidio.in" 
              className="hover:underline"
            >
              support@zidio.in
            </a>
          </div>
        </div>

        {/* Right Side: Time and Social Media */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span>9.00 am - 5.30 pm</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook className="hover:text-gray-300" />
            <FaTwitter className="hover:text-gray-300" />
            <FaLinkedin className="hover:text-gray-300" />
            <FaYoutube className="hover:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
