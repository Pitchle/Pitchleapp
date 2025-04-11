import React from "react";

const Introduction = () => {
  return (
    <div className="text-center mb-40 mt-32 lg:h-screen flex items-center justify-center">
      <h2 className="text-[38px] font-[700] md:text-8xl lg:font-bold leading-[3rem] md:leading-[5rem] lg:leading-[7rem]">
        Empowering Small <br /> Businesses <br className={"block lg:hidden"} />{" "}
        to{" "}
        <span className="text-[#01BF74] flex items-center gap-1 inline-flex">
          Grow
          <img
            className="w-7 ms-4 h-7 lg:w-16 lg:h-16"
            src="/img/icon/img.png"
            alt=""
          />
        </span>{" "}
        and <br />
        <span className="text-[#417DFF] flex items-center gap-1 inline-flex">
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
  );
};

export default Introduction;
