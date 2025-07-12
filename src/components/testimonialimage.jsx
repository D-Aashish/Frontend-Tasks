// TestimonialImage.js
export default function TestimonialImage({ imageName, altText }) {
  return (
    <div className="w-20 h-20  overflow-hidden bg-gray-100 flex justify-center items-center shadow-md">
      <img
        className="object-cover w-full h-full"
        src={`./assets/testimonials/${imageName}`}
        alt={altText}
      />
    </div>
  );
}
