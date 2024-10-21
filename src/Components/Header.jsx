import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import zidioLogo from '../assets/zidio-logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Top from "./Top";
import Modal from './Modal';  // Import the custom Modal component
import Login from './Login';  // Import your Login component
import Register from './Register';  // Import your Register component

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);   // For Login modal
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // For Register modal

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50); // Change to transparent background after scrolling 50 pixels
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLoginModal = () => setIsLoginOpen(true);
  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <> 
      <Top/>
      <div className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D1B2A]' : 'bg-transparent'}`}>
        <div className='mx-[10%] flex justify-between items-center h-20'>
          {/* Hamburger Menu for Mobile */}
          <div className='lg:hidden flex items-center cursor-pointer' onClick={toggleSidebar}>
            <GiHamburgerMenu className='text-btColor' size={30} />
          </div>

          <div>
            <img src={zidioLogo} alt="Zidio-logo" className='h-10' />
          </div>

          <div className='flex items-center hidden lg:flex'>
            <ul className='list-none flex space-x-4'>
              <li className='hover:text-btColor cursor-pointer'>
                <Link to="/" className="text-black hover:text-btColor">Home</Link>
              </li>
              <li className='hover:text-btColor cursor-pointer'>
                <Link to="/Components/About" className="text-black hover:text-btColor">About</Link>
              </li>
              <li className='hover:text-btColor cursor-pointer'>
                <Link to="/services" className="text-black hover:text-btColor">Services</Link>
              </li>
              <li className='hover:text-btColor cursor-pointer'>
                <Link to="/Components/Contact" className="text-black hover:text-btColor">Contact</Link>
              </li>
            </ul>

            <span className='mx-5 cursor-pointer hidden lg:block'>🔍</span>
          </div>

          {/* Login & Register Buttons for Desktop */}
          <div className='mx-5 flex space-x-4 hidden lg:flex'>
            <button onClick={openLoginModal} className='px-6 py-2 text-btColor border-btColor border rounded-md hover:bg-btColor hover:text-white transition-all'>
              Login
            </button>
            <button onClick={openRegisterModal} className='px-6 py-2 text-white bg-btColor border-btColor border rounded-md hover:bg-white hover:text-btColor transition-all'>
              Register
            </button>
          </div>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div 
            className='fixed inset-0 z-10 bg-black bg-opacity-50' 
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
          <div className='p-4 flex justify-between items-center'>
            <h2 className='text-lg font-bold'>Menu</h2>
            <button onClick={toggleSidebar} className='text-btColor'>✖</button>
          </div>
          <ul className='list-none'>
            <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={toggleSidebar}>
              <Link to="/">Home</Link>
            </li>
            <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={toggleSidebar}>
              <Link to="/Components/About">About</Link>
            </li>
            <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={toggleSidebar}>
              <Link to="/services">Services</Link>
            </li>
            <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={toggleSidebar}>
              <Link to="/Components/Contact">Contact</Link>
            </li>
          </ul>

          {/* Sidebar Footer */}
          <div className='absolute bottom-0 left-0 right-0 p-4 bg-gray-100'>
            <img src={zidioLogo} alt="Zidio Logo" className='h-10 mb-2 mx-auto' />
            <div className='flex justify-center space-x-4'>
              <a href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='text-btColor hover:text-blue-600 transition-colors' size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556709391417" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-btColor hover:text-blue-600 transition-colors' size={24} />
              </a>
              <a href="https://x.com/zidioDev" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-btColor hover:text-blue-600 transition-colors' size={24} />
              </a>
              <a href="https://www.linkedin.com/company/zidio-development/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-btColor hover:text-blue-600 transition-colors' size={24} />
              </a>
            </div>

            {/* Login & Register Buttons for Mobile */}
            <div className='flex flex-col items-center mt-4'>
              <button onClick={openLoginModal} className='px-4 py-2 text-btColor border-btColor border rounded-md hover:bg-btColor hover:text-white transition-all mb-2'>
                Login
              </button>
              <button onClick={openRegisterModal} className='px-4 py-2 text-white bg-btColor border-btColor border rounded-md hover:bg-white hover:text-btColor transition-all'>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Login */}
      <Modal isOpen={isLoginOpen} closeModal={closeModal}>
        <Login />
      </Modal>

      {/* Modal for Register */}
      <Modal isOpen={isRegisterOpen} closeModal={closeModal}>
        <Register />
      </Modal>
    </>
  );
};

export default Header;
