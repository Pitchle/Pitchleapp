import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 lg:px-16 xl:px-32 2xl:px-48">
      {/* Heading */}
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center mt-2 lg:mt-10 leading-tight">
        <span className="text-[#01BF74]">Revolutionize</span> Business <br />{" "}
        with Short Videos!
      </h1>

      {/* Video and Buttons Section */}
      <div>
        {/* Desktop View */}
        <div className="hidden lg:flex -mt-20 items-center gap-10 xl:gap-20 bannerDesktop">
          {/* Left Side Buttons */}
          <div className="flex flex-col items-start justify-between gap-32   ">
            <img
              className="w-[23rem] h-[175] -mt-5"
              src="/img/buttons/Frame%2086.png"
              alt=""
            />
            <img
              className="w-[23rem] h-[175] "
              src="/img/buttons/Group%2010.png"
              alt=""
            />
          </div>

          {/* Video Section */}
          <div className="relative mt-32">
            <video
              src="/video/intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[400px] h-[765px] rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-32   ">
            {/* Right Side Button */}
            <img
              className="h-auto  mt-10 rightImg w-[23rem]"
              src="/img/buttons/Frame%2091.png"
              alt=""
            />
          </div>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col mt-5 items-center gap-4 lg:hidden">
          <div className="w-full flex justify-center">
            <video
              src="/video/intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[50vw] max-w-xs sm:max-w-md rounded-lg"
            />
          </div>

          <img className="w-auto h-auto  " src="/img/banner.svg" alt="" />
        </div>
      </div>

      {/* Text and Download Buttons */}
      <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl my-8 leading-snug">
        Download Pitchle and start growing <br /> your business today!
      </p>

      <div className="flex flex-row justify-center items-center gap-1 mt-5">
        <a
          href="https://apps.apple.com/us/app/pitchle/id6677026938"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center bg-gradient-to-r from-[#383838] to-[#000000] text-white px-5 py-3 md:px-7 md:py-4 rounded-lg shadow-lg">
            <img
              className="w-5 h-5 md:w-6 md:h-6 me-2"
              src="/img/logo/apple.png"
              alt=""
            />
            <span className="text-md md:text-xl font-semibold">
              Apple Store
            </span>
          </button>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.pitchle.pitchleApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center bg-gradient-to-r from-[#383838] to-[#000000] text-white px-5 py-3 md:px-7 md:py-4 rounded-lg shadow-lg">
            <img
              className="w-5 h-5 md:w-6 md:h-6 me-2"
              src="/img/logo/playstore.png"
              alt=""
            />
            <span className="text-base md:text-lg font-semibold">
              Google Play
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Banner;
