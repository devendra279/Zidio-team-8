import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const coursesData = [
  {
    title: 'Artificial Intelligence',
    description: 'Introduces foundational concepts and practical applications of artificial intelligence, empowering learners to develop intelligent systems and problem-solve effectively.',
    imgSrc: 'https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003702.jpg',
  },
  {
    title: 'Various Programming Languages',
    description: 'Equips learners with the ability to create, design, and implement software solutions using various programming languages.',
    imgSrc: 'https://codiska.com/wp-content/uploads/2023/07/7bae45c5a7_compressed.jpg',
  },
  {
    title: 'Machine Learning',
    description: 'Foundational concepts and practical applications of machine learning, empowering learners to develop intelligent systems that can learn from data and make predictions.',
    imgSrc: 'https://internx.in/wp-content/uploads/2024/02/Machine-Learning.jpg',
  },
  {
    title: 'Ethical Hacking',
    description: 'Equips learners with the knowledge and tools to identify vulnerabilities in systems and networks, improving security against cyber threats.',
    imgSrc: 'https://media.licdn.com/dms/image/D5612AQGrWJClop4C4A/article-cover_image-shrink_600_2000/0/1669263859932?e=2147483647&v=beta&t=e3JK5OO7WIp4C-FBLu5PnBpL0bRtBlbVquX0-6nwOhc',
  },
  {
    title: 'Web Development',
    description: 'Equips learners with the ability to design, create, and maintain interactive websites and web applications, delivering exceptional user experiences.',
    imgSrc: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23164055/Web-Designing-Course-Syllabus.jpg',
  },
  {
    title: 'Data Science',
    description: 'Equips learners with the ability to extract insights and knowledge from data using statistical techniques and machine learning algorithms.',
    imgSrc: 'https://media.istockphoto.com/id/1465111287/vector/website-design-and-development-for-multiple-device-access-illustration.jpg?s=612x612&w=0&k=20&c=tga8_FTc3RNzR8hEd8itWGIhrO_rHFaeiPSssVORlbM=',
  },
];

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className='container py-10'>
      <h1 className='text-blue-950 font-black text-4xl pb-8 text-center'>What Skills We Provide Students for a Better Future?</h1>
      <Slider {...settings}>
        {coursesData.map((course, index) => (
            <div>

          <div key={index} className="bg-white rounded-xl gap-9 ms-10 p-4">
            <img src={course.imgSrc} alt={course.title} className='rounded-t-xl w-full h-48 object-cover' />
            <h1 className='font-bold text-2xl text-cyan-900 mt-2 text-center'>{course.title}</h1>
            <p className='font-bold text-md text-cyan-950 p-2 text-center'>{course.description}</p>
            <button className='bg-sky-800 text-white hover:border-blue-800 hover:bg-white hover:text-blue-950 hover:font-bold border my-2 p-2 rounded-md w-full'>More Info</button>
          </div>
            </div>
        ))}
      </Slider>
      <h1 className='bg-sky-800 text-white rounded-md border hover:border-sky-800 hover:bg-white hover:text-sky-800 text-3xl font-medium p-2 text-center mt-10'>
        <a href="">Click Here For More Services Info</a>
      </h1>
    </div>
  );
};

export default Courses;
