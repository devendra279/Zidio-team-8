import React from 'react';

const TeamPage = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-blue-900 text-white text-center py-12 relative my-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-transparent opacity-60"></div>
        <br />
        <h1 className="text-2xl font-bold z-10 my-14 center">Our Team</h1>
        <p className="text-sm z-10 relative -mt-12">Home &gt; Team</p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold text-blue-800">Dedicated Team</h2>
          <p className="text-2xl font-bold my-4">Meet Our Dedicated Member For Any Enquiry</p>

          {/* Team members container */}
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {/* Team Member 1 */}
            <div className="relative group w-36 h-36 bg-gray-200 rounded-lg shadow-lg flex-shrink-0 overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/images/team1.png" // Adjust the path based on where your image is located
                alt="Team Member 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">Member 1</span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="relative group w-36 h-36 bg-gray-200 rounded-lg shadow-lg flex-shrink-0 overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/images/team2.png" // Adjust the path
                alt="Team Member 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">Member 2</span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="relative group w-36 h-36 bg-gray-200 rounded-lg shadow-lg flex-shrink-0 overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/images/team3.png" // Adjust the path
                alt="Team Member 3"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">Member 3</span>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="relative group w-36 h-36 bg-gray-200 rounded-lg shadow-lg flex-shrink-0 overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/images/team4.png" // Adjust the path
                alt="Team Member 4"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">Member 4</span>
              </div>
            </div>
          </div>

          {/* "All Members" Button */}
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              All Members
            </button>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold">Get Latest Update from ZIDIO</h2>
          <p className="text-sm mt-2">Stay Connect with Us</p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 text-black rounded-lg"
            />
            <button className="bg-white text-blue-700 px-4 py-2 ml-2 rounded-lg">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold">Account Register</h3>
            <p className="text-sm text-gray-600">Opportunities before automation market. Dramatically prioritize.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold">Add New Card</h3>
            <p className="text-sm text-gray-600">Opportunities before automation market. Dramatically prioritize.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold">Verified Account</h3>
            <p className="text-sm text-gray-600">Opportunities before automation market. Dramatically prioritize.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
