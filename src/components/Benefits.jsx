import React from "react";

const benefitsData = [
  {
    icon: "/img/icon/img_2.png",
    title: "AI Recommendations",
    description:
      "Pitchle uses AI to streamline and automate tasks, saving you time and effort.",
  },
  {
    icon: "/img/icon/img_3.png", // Replace with your image path
    title: "Impact+ Verification",
    description:
      " We review certificates, DPP and supporting evidence. Verified products display the green Impact+ label",
  },
  {
    icon: "/img/icon/img_4.png", // Replace with your image path
    title: "One-Tap Checkout",
    description: " Pay securely in one tap. Coordinate delivery and tap Confirm received to complete the order",
  },
  {
    icon: "/img/icon/img_8.png", // Replace with your image path
    title: "Video Pitches",
    description:
      "Post your ideas, business offers, and product promotions with an attractive 30-sec video. Upgrade to a 60-sec premium video for more exposure.",
  },
  {
    icon: "/img/icon/img_6.png", // Replace with your image path
    title: "Customer Support",
    description:
      "Enjoy dedicated customer support to assist you every step of the way.",
  },
  {
    icon: "/img/icon/img_7.png", // Replace with your image path
    title: "Privacy & Security",
    description:
      "Control who can see your profile and pitches with customizable privacy settings.",
  },
];

const Benefits = () => {
  return (
    <>
      <div className="container mx-auto lg:mt-60 px-2">
        <section>
          <h1 className="text-4xl lg:text-6xl font-bold mt-20 mb-5 lg:my-28 text-center">
            Discover all the benefits of Pitchle!
          </h1>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 md:grid-cols-3 lg:ms-16 lg:grid-cols-3 gap-1 px-1 lg:px-0 sm:gap-7 lg:gap-10 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className=" sm:p-6 lg:p-8 space-y-2 lg:space-y-6 rounded-xl px-1 py-2 lg:px-0 bg-[#F5F5F5] md:bg-transparent"
              >
                <img
                  className="w-12 h-12 lg:w-20 mb-4 lg:h-20"
                  src={benefit.icon}
                  alt={benefit.title}
                />
                <h1 className="text-[16px] lg:text-3xl font-bold lg:font-bold text-start">
                  {benefit.title}
                </h1>
                <h1 className="text-sm text-[#767676] lg:text-[20px] lg:font-[400] lg:leading-7 text-start">
                  {benefit.description}
                </h1>
                {/* <div className="flex justify-center sm:justify-start items-center my-4 space-x-3">
              <div>{section.icon}</div>
              <h3 className="font-bold text-[#222222] text-lg sm:text-xl lg:text-xl">
                {section.title}
              </h3>
            </div>
            <p className="text-start text-sm sm:text-base lg:text-lg font-[400] text-[#343434]">
              {section.description}
            </p> */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Benefits;
