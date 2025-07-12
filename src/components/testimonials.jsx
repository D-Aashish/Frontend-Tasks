import { useState } from 'react';
import TestimonialImage from './testimonialimage.jsx';

const testimonialImages = [
  { imageName: "testimonial.png", altText: "Testimonial 1", position: { top: '24%', left: '32%' } },
  { imageName: "image.png", altText: "Testimonial 2", position: { top: '24%', left: '50%' } },
  { imageName: "image 22.png", altText: "Chat icon", position: { top: '24%', left: '41%' } },
  { imageName: "image-1.png", altText: "Testimonial 3", position: { top: '45%', left: '24%' } },
  { imageName: "image 21.png", altText: "Heart icon", position: { top: '38%', left: '65%' } },
  { imageName: "image 25.png", altText: "Testimonial 4", position: { bottom: '25%', left: '25%' } },
  { imageName: "image 20.png", altText: "Testimonial 5", position: { bottom: '25%', left: '34%' } },
  { imageName: "image 24.png", altText: "Testimonial 6", position: { bottom: '25%', left: '44%' } },
  { imageName: "Property 1=Default.png", altText: "Trophy", position: { bottom: '25%', left: '56%', transform: 'translateX(-50%)' } },
  { imageName: "image 27.png", altText: "Thumbs up icon", position: { bottom: '30%', left: '61%' } }
];

const testimonialImagesHovered = [
  { imageName: "testimonial.png", altText: "Testimonial 1", position: { top: '15%', left: '28%' } },
  { imageName: "image.png", altText: "Testimonial 2", position: { top: '15%', left: '65%' } },
  { imageName: "image 22.png", altText: "Chat icon", position: { top: '8%', left: '45%' } },
  { imageName: "image-1.png", altText: "Testimonial 3", position: { top: '38%', left: '12%' } },
  { imageName: "image 21.png", altText: "Heart icon", position: { top: '38%', left: '80%' } },
  { imageName: "image 25.png", altText: "Testimonial 4", position: { bottom: '25%', left: '20%' } },
  { imageName: "image 20.png", altText: "Testimonial 5", position: { bottom: '8%', left: '32%' } },
  { imageName: "image 24.png", altText: "Testimonial 6", position: { bottom: '5%', left: '45%' } },
  { imageName: "Property 1=Default.png", altText: "Trophy", position: { bottom: '8%', left: '62%', transform: 'translateX(-50%)' } },
  { imageName: "image 27.png", altText: "Thumbs up icon", position: { bottom: '25%', left: '70%' } }
];

export default function Testimonial() {
  const [isHovered, setIsHovered] = useState(false);

  const renderTestimonialImages = () => {
    return testimonialImages.map((image, index) => {
      const defaultPosition = image.position;
      const hoverPosition = testimonialImagesHovered[index].position;
      const positionStyle = isHovered ? hoverPosition : defaultPosition;

      return (
        <div
          key={index}
          className="absolute transition-all duration-700 ease-in-out"
          style={{
            ...positionStyle
          }}
        >
          <TestimonialImage
            imageName={image.imageName}
            altText={image.altText}
          />
        </div>
      );
    });
  };

  return (
    <div
      className="bg-white w-[90vw] h-[90vh] relative overflow-hidden flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Center image */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
        <TestimonialImage imageName="text.png" altText="Testimonial 9" />
      </div>

      {renderTestimonialImages()}
    </div>
  );
}
