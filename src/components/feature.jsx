import React from "react";

const features = [
  {
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: "/assets/Features/Group.png",
    bg: "bg-[#F76C6C]",
    imgPos: "left-0 top-0", // top-left
  },
  {
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    image: "/assets/Features/Group1.png",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bg: "bg-[#4D9DE0]",
    imgPos: "right-0 top-0", // top-right
  },
  {
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    image: "/assets/Features/Group3.png",
    bg: "bg-[#7C6FF6]",
    imgPos: "left-0 bottom-0", // bottom-left
  },
  {
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    image: "/assets/Features/Group2.png",
    bg: "bg-[#B5A267]",
    imgPos: "right-0 bottom-0", // bottom-right
  },
];

export default function FeatureGrid() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f7f7]">
      {/* Main heading and subheading */}
      <div className="mb-10 w-full max-w-6xl">
        <p className="text-lg md:text-xl font-normal text-gray-500 mb-1 text-left text-[#212229]">Your SkillShikshya Journey</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-left">
          <span className="text-[#2E8B57]">Step In.</span>{" "}
          <span className="text-[#3B82F6]">Skill Up.</span>{" "}
          <span className="text-[#22223B]">Stand Out.</span>{" "}
          <span className="inline-block">🚀</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`${feature.bg} relative rounded-[48px] border-8 border-white shadow-2xl p-12 min-h-[300px] flex flex-row ${idx % 2 === 1 ? 'flex-row-reverse' : ''} items-center overflow-visible`}
          >
            {/* Illustration - absolutely positioned, bottom for bottom row */}
            {idx < 2 ? (
              <img
                src={feature.image}
                alt={feature.title}
                className={`w-40 h-40 object-contain absolute top-1/2 -translate-y-1/2 ${idx % 2 === 1 ? 'right-[-40px]' : 'left-[-40px]'}`}
                style={{ zIndex: 2 }}
              />
            ) : (
              <img
                src={feature.image}
                alt={feature.title}
                className={`w-48 h-48 object-contain absolute bottom-0 ${idx % 2 === 1 ? 'right-0' : 'left-0'} translate-y-1/3`}
                style={{ zIndex: 2 }}
              />
            )}
            {/* Text content */}
            <div className={`flex-1 flex flex-col justify-center z-10 px-8 ${idx % 2 === 1 ? 'items-end text-right' : 'items-start text-left'} max-w-lg`}>
              <h2 className="text-white text-5xl font-extrabold font-sans leading-tight mb-3">{feature.title}</h2>
              <h3 className="text-white text-2xl font-bold font-sans leading-snug mb-5">{feature.subtitle}</h3>
              <p className="text-white text-lg font-sans leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
