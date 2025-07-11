import TestimonialImage from './testimonialimage.jsx';

export default function testimonial() {
  return (
     <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
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
      <div className="flex justify-center gap-4 flex-wrap">
        {/* Testimonials */}
        <TestimonialImage imageName="image 20.png" altText="Testimonial 1" />
        {/* <TestimonialImage imageName="text.png" altText="Testimonial 1" /> */}
        <TestimonialImage imageName="image 21.png" altText="Testimonial 2" />
        <TestimonialImage imageName="image 22.png" altText="Testimonial 3" />
        <TestimonialImage imageName="image 24.png" altText="Testimonial 4" />
        <TestimonialImage imageName="image 25.png" altText="Testimonial 1" />
        <TestimonialImage imageName="image 27.png" altText="Testimonial 2" />
        <TestimonialImage imageName="image-1.png" altText="Testimonial 3" />
        <TestimonialImage imageName="image.png" altText="Testimonial 4" />
        <TestimonialImage imageName="testimonial.png" altText="Testimonial 4" />
        <TestimonialImage imageName="Property 1=Default.png" altText="Testimonial 4" />
</div>
    </div>
  );
}
