import React from "react";

const Introduction = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4  lg:px-16 xl:px-32 2xl:px-48">
      <div className="text-center lg:h-screen flex items-center justify-center">
        <h2 className=" text-4xl font-[700] md:text-6xl lg:font-bold leading-[3rem] md:leading-[4rem] lg:leading-[4.2rem]">
          Empowering Small <br /> Businesses to{" "}
          <span className="text-[#01BF74]  items-center gap-1 inline-flex">
            Grow
            <img
              className="w-7 ms-4 h-7 lg:w-16 lg:h-16"
              src="/img/icon/img.png"
              alt=""
            />
          </span>{" "}
          and
          <span className="text-[#417DFF]  items-center gap-1 inline-flex">
            Succeed
            <img
              className="w-7 lg:ms-4 h-7 lg:w-20 lg:h-20"
              src="/img/icon/img_1.png"
              alt=""
            />
          </span>{" "}
          Equitably
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
