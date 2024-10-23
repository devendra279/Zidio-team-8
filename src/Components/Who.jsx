import React from 'react';
import HeroServices from './HeroServices'
const Who = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto flex flex-col lg:flex-row p-6'>
        {/* Left Section */}
        <div className='flex flex-col w-full lg:w-2/3 p-4'>
          <div className='flex flex-col lg:flex-row items-center justify-between mb-6'>
            <div className='bg-blue-800 text-white font-semibold rounded-xl p-6 shadow-lg text-center mb-4 lg:mb-0'>
              <h2 className='text-2xl'>FASTEST GROWING<br /> IT COMPANY OF THE YEAR <br />2022</h2>
            </div>
            <img 
              className='w-full lg:w-2/3 rounded-3xl shadow-lg'
              src="https://www.custominfotech.com/wp-content/uploads/2019/04/shutterstock_1150356917.jpg" 
              alt="Company Highlights" 
            />
          </div>
          <div className='flex items-center justify-center mb-6'>
            <div className='bg-blue-800 text-white font-semibold rounded-xl w-40 h-40 flex flex-col items-center justify-center shadow-lg'>
              <h1 className='text-6xl font-bold'>5+</h1>
              <p className='text-center'>Years Of <br /> Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-1/3 p-4'>
          <h1 className='font-bold text-4xl text-blue-950 mb-4'>Who We Are <br /> and What We Do?</h1>
          <p className='font-semibold text-lg text-blue-500'>
            Zidio Development is a leading IT company that offers a wide range of services and solutions to businesses and individuals alike. Our expertise spans across various domains, including software development, web design, digital marketing, cybersecurity, and cloud computing.
            <br /><br />
            Beyond our services, Zidio Development is committed to nurturing the next generation of IT professionals. We offer a comprehensive range of educational programs, workshops, and certifications to equip students with the skills and knowledge they need to succeed in the dynamic world of technology.
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default Who;
