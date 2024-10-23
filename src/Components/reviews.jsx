import React from 'react';
 

const Reviews = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <h1 className='text-gray-800 font-bold text-5xl pb-10 text-center'>Customer Feedback</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                
                {reviewsData.map((review, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg w-80 p-5 transition-transform transform hover:scale-105'>
                        <div className='flex items-center mb-4'>
                            <div className={`w-20 h-20 rounded-full bg-cover bg-center mr-4`} style={{ backgroundImage: `url(${review.photo})` }}>
                            </div>
                            <div>
                                <p className='font-bold text-lg text-gray-800'>{review.name}</p>
                                <div className="flex items-center">
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <span key={i} className='text-yellow-500'>★</span>
                                    ))}
                                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                                        <span key={i} className='text-gray-300'>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-600 mb-4'>{review.feedback}</p>
                        <blockquote className='text-sm text-gray-500 text-right'>{review.date}</blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

const reviewsData = [
    {
        name: 'Anubhav Sinha',
        feedback: 'I was a bit intimidated by technology, but the team at Zidio made me feel right at ease. They explained everything in a way that I could understand, and they were always patient and helpful. I\'m so grateful for their support.',
        rating: 5,
        date: '12 July, 2024',
        photo: 'Components/images/front-view-man-ambulance-car_23-2149478476.jpg',
    },
    {
        name: 'Raghav Chadha',
        feedback: 'We needed a reliable IT partner to support our growing IT infrastructure. Zidio has been instrumental in helping us achieve our goals. Their proactive approach and ability to handle complex projects have been invaluable.',
        rating: 4,
        date: '12 July, 2024',
        photo: 'Components/images/medium-shot-smiley-man-posing_23-2149915892.jpg',
    },
    {
        name: 'Pooja Jain',
        feedback: 'As a busy professional, I rely on Zidio for all my IT needs. They\'re always quick to respond, and I couldn\'t be happier with their service.',
        rating: 3,
        date: '12 July, 2024',
        photo: 'Components/images/young-girl-standing-straight-looking-shoulder-yellow-bomber-jacket-looking-happy_176474-18346.jpg',
    },
    {
        name: 'Eliza Carson',
        feedback: 'I\'ve worked with a lot of IT companies over the years, but Zidio is definitely a cut above the rest. They are great communicators who can break down complex concepts into plain English.',
        rating: 5,
        date: '12 July, 2024',
        photo: 'Components/images/smiling-young-brunette-caucasian-girl-looks-isolated-purple-wall_141793-70792.jpg',
    },
    {
        name: 'Jogesh Arya',
        feedback: 'Zidio was a total lifesaver for our outdated IT system. They assessed the situation and provided a clear plan, making everything run smoothly again.',
        rating: 5,
        date: '12 July, 2024',
        photo: 'Components/images/young-attractive-business-man_144627-18026.jpg',
    },
    {
        name: 'Augustine',
        feedback: 'Zidio is not just tech experts; they are also great communicators who break down complex concepts into plain English.',
        rating: 5,
        date: '12 July, 2024',
        photo: 'Components/images/portrait-young-latin-man-wearing-summer-clothes-listening-music-with-earphones-against-yellow-space_58466-11962.jpg',
    },
];

export default Reviews;
