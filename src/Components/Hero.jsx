import rocket from '../assets/rocket.png';
import model from '../assets/model.png';
import { Link } from "react-router-dom";
import Who from './Who'

const HeroPoster = () => {
  return (
    <div className="bg-[url('./assets/heroBg.jpg')] bg-cover min-h-[80vh] pt-[100px] relative"> {/* Adjusted the height and padding */}
      <div className="mx-[8%] flex justify-between items-center relative z-10"> {/* Ensure elements are properly aligned */}
        
        {/* Left Side Content */}
        <div className="flex-1">
          <h6 className="text-lg text-white mb-2">
            Software Development & Consultancy
          </h6>
          <h1 className="text-6xl mt-3 mb-5 text-white leading-tight">
            Business Innovation <br /> Through Technology
          </h1>
          <p className="text-[#B6B9C0] mb-5 max-w-md">
            Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
          </p>
          <div>
           <Link to="/contact" className="hover:underline"> <button className="cursor-pointer text-white mr-2 px-4 py-3 rounded outline outline-2 outline-btColor bg-btColor hover:bg-white hover:text-black">
              Lets Talk &rarr;
            </button>
            </Link>
 

            <Link to="/about" className="hover:underline">
            <button className="cursor-pointer text-white ml-2 px-4 py-3 rounded outline outline-2 outline-btColor bg-btColor hover:bg-white hover:text-black">
              Read More &rarr;
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex-1 flex justify-end">
          <img src={rocket} alt="Rocket" className="absolute top-2/4 right-2/3 animate-[spin_20s_linear_infinite]" />
          <img className="max-h-[80%]" src={model} alt="Model" /> {/* Reduced height for better alignment */}
        </div>
      </div>
    <Who/>
    </div>
  );
};

export default HeroPoster;
