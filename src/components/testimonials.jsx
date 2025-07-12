import TestimonialImage from './testimonialimage.jsx';

export default function Testimonial() {
  return (
    <div className="bg-white w-[90vw] h-[90vh] relative overflow-hidden flex justify-center items-center">

      <div className="mainText text-center">

      <h3 className="text-2xl font-bold text-center text-gray-800">
        Hear How They Level Up Their Game!
      </h3>
      <h3 className="text-3xl font-bold text-center text-black">
        Skill <span className="text-[#1DA077]">Masters</span> Unite! 🤝
      </h3>
      <div className="flex justify-center">
        <button className="text-black px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          View all Testimonials
        </button>
      </div>

      </div>
      

      <div className="absolute" style={{top: '300px', right: '65%'}}>
        <TestimonialImage imageName="image-1.png" altText="Thumbs up icon" />
      </div>
      <div className="absolute" style={{top: '170px', right: '60%'}}>
        <TestimonialImage imageName="testimonial.png" altText="Testimonial 9" />
      </div>
      <div className="absolute" style={{top: '170px', left: '44%'}}>
        <TestimonialImage imageName="image 22.png" altText="Chat icon" />
      </div>
      <div className="absolute" style={{top: '170px', left: '55%'}}>
        <TestimonialImage imageName="image.png" altText="Testimonial 8" />
      </div>
      <div className="absolute" style={{top: '300px', right: '30%'}}>
        <TestimonialImage imageName="image 21.png" altText="Testimonial 2" />
      </div>
      <div className="absolute" style={{bottom: '140px', right: '35%'}}>
        <TestimonialImage imageName="image 27.png" altText="Heart icon" />
      </div>
      <div className="absolute" style={{bottom: '140px', left: '53%', transform: 'translateX(-50%)'}}>
        <TestimonialImage imageName="Property 1=Default.png" altText="Trophy" />
      </div>
      <div className="absolute" style={{bottom: '140px', left: '560px'}}>
        <TestimonialImage imageName="image 24.png" altText="Testimonial 4" />
      </div>
      <div className="absolute" style={{bottom: '140px', left: '450px'}}>
        <TestimonialImage imageName="image 20.png" altText="Testimonial 1" />
      </div>
  
      <div className="absolute" style={{bottom: '140px', left: '340px'}}>
        <TestimonialImage imageName="image 25.png" altText="Testimonial 5" />
      </div>

      

    </div>
  );
}