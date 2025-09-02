import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const featureSections = [
  {
    title: "Discover in 30s",
    description: (
        <>
          Explore quick clips from responsible brands.
          <br />
          Swipe and save favorites.
        </>
    ),
    bgColor: "bg-[#417DFF]",
    videoId: "/video/promote.mp4",
    layout: "right", // Video on the right, Text on the left
  },
  {
    title: "Shop with Impact+",
    description:
      "Verification of certifications/DPP reviewed by Pitchle.",
    bgColor: "bg-[#01BF74]",
    videoId: "/video/sell.mp4",
    layout: "left", // Video on the left, Text on the right
  },
  {
    title: " One-tap checkout",
    description:
      " Pay securely without leaving the video.",
    bgColor: "bg-[#343434]",
    videoId: "/video/partners.mp4",
    layout: "right", // Video on the right, Text on the left
  },
];

const FeatureCard = ({
  section,
  index,
  scrollYProgress,
  scrollRange,
  viewportHeight,
}) => {
  // Calculate the start and end values for this section's scroll range
  const start = index * scrollRange;
  const end = (index + 5) * scrollRange;
  // Use the hook at the top level of the component
  const y = useTransform(scrollYProgress, [start, end], [50, -viewportHeight]);

  return (
    <motion.div
      className={`sticky top-10 w-11/12 lg:w-10/12 mx-auto mb-10 ${section.bgColor} text-white rounded-3xl`}
      style={{
        zIndex: index + 1,
        y, // vertical translation based on scroll progress
      }}
    >
      <div
        className={`flex flex-col-reverse md:flex-row rounded-3xl overflow-hidden ${
          section.layout === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Video Section */}
        <div className="w-full mb-2 mx-auto rounded-3xl md:w-1/2">
          <video
            src={section.videoId}
            autoPlay
            loop
            muted
            playsInline
            className="w-full animated-image mx-auto px-2 pt-2 h-full rounded-3xl"
          />
        </div>
        {/* Text Section */}
        <div className="p-5 lg:p-16 lg:mb-20 w-full flex justify-center items-start flex-col md:w-1/2">
          <h3 className="text-2xl my-2 lg:my-5 lg:text-4xl font-semibold">
            {section.title}
          </h3>
          <p className="mt-2 text-lg font-light lg:text-2xl">
            {section.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  // Ref for the scroll container
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sectionCount = featureSections.length;
  const scrollRange = 0 / sectionCount;
  // You might want to adjust viewportHeight based on your design
  const viewportHeight = 0;

  return (
    // The container height forces scrolling (e.g., 300vh for 3 sections)
      <div ref={containerRef} className="relative">
        <h2 className="text-center text-4xl lg:text-7xl font-bold my-12 lg:mb-16">
          How Pitchle works
        </h2>
        <p className="text-center text-lg lg:font-[400] sm:text-xl md:text-2xl lg:text-[32px] my-20 leading-snug">
          Watch 30-second videos, look for the green Impact+ label, and buy in one tap.
        </p>
        {featureSections.map((section, index) => (
            <FeatureCard
                key={index}
                section={section}
                index={index}
                scrollYProgress={scrollYProgress}
                scrollRange={scrollRange}
                viewportHeight={viewportHeight}
            />
        ))}
      </div>
  );
};

export default About;
