import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroServices = [
  {
    title: 'Web Development',
    description: 'Design and build responsive, high-performance websites using the latest web technologies.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/11096/11096816.png',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your systems, networks, and programs from digital attacks.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png',
  },
  {
    title: 'IT Consulting',
    description: 'Get your personal IT consultant to guide you towards desirable results using IT.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/2145/2145635.png',
  },
  {
    title: 'Cloud Solutions',
    description: 'Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/4215/4215831.png',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/4322/4322270.png',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website visibility and traffic from search engines.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/2835/2835543.png',
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="ser" className='my-10 ms-6 py-2 bg-indigo-200'>
      <h1 className='font-extrabold text-5xl text-center text-blue-950 pb-8'>What Are We Providing?</h1>
      <div className="relative ">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div>
            <div key={index} className='flex flex-col items-center bg-cyan-950 rounded-xl h-96 mx-10'>
              <div className="bg-white hover:bg-sky-800 flex mt-10 mx-auto h-28 w-28 rounded-full">
                <img src={service.imgSrc} className='h-24 w-24 m-3' alt={service.title} />
              </div>
              <h1 className='hover:underline my-6 text-center text-3xl font-serif font-semibold text-blue-300'>
                <a href="">{service.title}</a>
              </h1>
              <p className='text-2xl font-serif text-center text-white'>{service.description}</p>
            </div>
            </div>
          ))}
        </Slider>
      </div>
      <h1 className='bg-sky-800 text-white rounded-md border hover:border-sky-800 hover:bg-white hover:text-sky-800 text-3xl font-medium p-2 mt-8 text-center'>
        <a href="">Click Here For More Services Info</a>
      </h1>
    </div>
  );
};

export default HeroServices;
