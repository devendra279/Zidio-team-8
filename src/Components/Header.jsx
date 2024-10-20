import { useState } from 'react'; // Import useState hook
import zidioLogo from '../assets/zidio-logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import social media icons
import { GiHamburgerMenu } from 'react-icons/gi'; 
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };

  const handleMenuClick = () => {
    // Logic for handling menu item clicks if needed
    // For now, it just logs to the console
    console.log('Menu item clicked');
  };

  return (
    <div className='relative'>
      <div className='mx-[10%] flex justify-between items-center h-28'>
        {/* Hamburger Menu for Mobile */}
        <div className='lg:hidden flex items-center cursor-pointer' onClick={toggleSidebar}>
          <GiHamburgerMenu className='text-btColor' size={30} /> {/* Correct icon */}
        </div>

        <div>
          <img src={zidioLogo} alt="Zidio-logo" className='h-10' />
        </div>

        <div className='flex items-center hidden lg:flex'>
          <ul className='list-none flex space-x-4'>
            <li className='hover:text-btColor cursor-pointer'>
              <a href="/" className="text-black hover:text-btColor">Home</a>
            </li>
            <li className='hover:text-btColor cursor-pointer'>
              <a href="/About" className="text-black hover:text-btColor">About</a>
            </li>
            <li className='hover:text-btColor cursor-pointer'>
              <a href="/Services" className="text-black hover:text-btColor">Services</a>
            </li>
            <li className='hover:text-btColor cursor-pointer'>
              <a href="/Contact" className="text-black hover:text-btColor">Contact</a>
            </li>
          </ul>

          {/* Search Icon */}
          <span className='mx-5 cursor-pointer hidden lg:block'>🔍</span>

          {/* Login & Register Buttons */}
          <div className='mx-5 flex space-x-4'>
            <button className='px-6 py-2 text-btColor border-btColor border rounded-md hover:bg-btColor hover:text-white transition-all'>
              Login
            </button>
            <button className='px-6 py-2 text-white bg-btColor border-btColor border rounded-md hover:bg-white hover:text-btColor transition-all'>
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div 
          className='fixed inset-0 z-10 bg-black bg-opacity-50' 
          onClick={toggleSidebar} // Clicking on the overlay closes the sidebar
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } z-20`}
      >
        <div className='p-4 flex justify-between items-center'>
          <h2 className='text-lg font-bold'>Menu</h2>
          <button onClick={toggleSidebar} className='text-btColor'>✖</button>
        </div>
        <ul className='list-none'>
          <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={handleMenuClick}>Home</li>
          <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={handleMenuClick}>About</li>
          <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={handleMenuClick}>Services</li>
          <li className='p-4 hover:bg-gray-200 cursor-pointer' onClick={handleMenuClick}>Contact</li>
        </ul>

        {/* Sidebar Footer */}
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gray-100'>
          <img src={zidioLogo} alt="Zidio Logo" className='h-10 mb-2 mx-auto' />
          <div className='flex justify-center space-x-4'>
            <a 
              href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Zidio YouTube Channel" // For accessibility
            >
              <FaYoutube className='text-btColor hover:text-blue-600 transition-colors' size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61556709391417" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Zidio Facebook Profile" // For accessibility
            >
              <FaFacebook className='text-btColor hover:text-blue-600 transition-colors' size={24} />
            </a>
            <a 
              href="https://x.com/zidioDev" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Zidio Twitter Profile" // For accessibility
            >
              <FaTwitter className='text-btColor hover:text-blue-600 transition-colors' size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/zidio-development/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Zidio LinkedIn Page" // For accessibility
            >
              <FaLinkedin className='text-btColor hover:text-blue-600 transition-colors' size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
