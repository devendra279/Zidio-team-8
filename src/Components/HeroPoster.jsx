import rocket from '../assets/rocket.png'
import model from '../assets/model.png'
const HeroPoster = () => {
  return (
    <div className="bg-[url('./assets/heroBg.jpg')] bg-cover h-[50%]" >
        <div className='mx-[8%] flex justify-between '>
            <div className='content-center'>
                <h6 className='text-lg text-white mb-2'>
                    Software Development & Consultancy
                </h6>
                <h1 className='text-6xl mt-3 mb-5 text-white'>
                    Business Innovation <br /> Through Technology
                </h1>
                <p className='text-[#B6B9C0] mb-5'>
                    Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
                </p>
                <div>
                    <button className='cursor-pointer text-white mr-2 px-4 py-3 rounded outline outline-2 outline-btColor bg-btColor hover:bg-white hover:text-black'>
                        Lets Talk &rarr;
                    </button>
                    <button className='cursor-pointer text-white ml-2 px-4 py-3 rounded outline outline-2 outline-btColor bg-btColor hover:bg-white hover:text-black'>
                        Read More &rarr;
                    </button>
                </div>
            </div>
            <img src={rocket} alt="" className='absolute top-1/3 right-1/3 animate-[spin_20s_linear_infinite]' />
            <div className='content-end'>
                <img className='max-h-[95%]' src={model} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroPoster