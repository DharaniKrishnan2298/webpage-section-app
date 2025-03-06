
import React, { useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.',
    author: 'Stack Overflow',
    authorTitle: '',
    image: 'https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg',
    link: 'https://www.udemy.com/topic/web-development/',
    linkText: 'View Web Development courses',
  },
  {
    text: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    author: 'Alvin Lim',
    authorTitle: 'Technical Co-Founder, CTO at Dimensional',
    image: 'https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg',
    link: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/',
    linkText: 'View this iOS & Swift course',
  },
  {
    text: 'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.',
    author: 'William A. Wachlin',
    authorTitle: 'Partner Account Manager at Amazon Web Services',
    image: 'https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg',
    link: 'https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/',
    linkText: 'View this AWS course',
  },
  {
    text: 'With Udemy Business, employees were able to marry technology and consultant soft skills to help drive their careers forward.',
    author: 'Ian Stevens',
    authorTitle: 'Head of Capability Development, North America at Publicis Sapient',
    image: 'https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png',
    link: 'https://business.udemy.com/case-studies/publicis-sapient/?ref=Ian_Stevens_Testimonial_LOHP',
    linkText: 'Read full story',
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className='testimonials'>
      <h2>See what others are achieving through learning</h2>
      <div className="testimonial-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&#8249;</button>
        <div className="testimonial-cards" ref={scrollRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <p className="quote"><img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="" width="17.78" height="16" loading="lazy"/><br></br>{testimonial.text}</p>
              <div className="author-info">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div>
                  <span className="author">{testimonial.author}</span>
                  <span className="author-title">{testimonial.authorTitle}</span>
                </div>
              </div>
              <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="link">
                {testimonial.linkText}
              </a>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>&#8250;</button>
      </div>
    </section>
  );
};

export default Testimonials;
