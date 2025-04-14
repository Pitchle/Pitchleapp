import React from "react";

const Introduction = () => {
  return (
    <div className="container mx-auto px-2 my-20 lg:mt-32 lg:mb-72">
      <div className="text-center hidden md:flex  items-center justify-center">
        <h2 className=" text-[32px] sm:text-[34px] font-[700] md:text-6xl lg:font-bold leading-[3rem] md:leading-[4rem] lg:leading-[4.2rem] tracking-wider">
          Empowering Small <br /> Businesses to{" "}
          <span className="text-[#01BF74]  items-center gap-1 inline-flex">
            Grow
            <img
              className="w-7 ms-2 h-7 lg:w-14 lg:h-14"
              src="/img/icon/img.png"
              alt=""
            />
          </span>{" "}
          and {" "} <br/>
          <span className="text-[#417DFF]  items-center gap-1 inline-flex">
            Succeed
            <img
              className="w-7 lg:ms-2 h-7 lg:w-14 lg:h-14"
              src="/img/icon/img_1.png"
              alt=""
            />
          </span>{" "}
          Equitably
        </h2>
      </div>
      <div className="text-center flex lg:h-screen  md:hidden items-center justify-center">
        <h2 className=" text-[30px] sm:text-[30px] mt-14 mb-28 font-[700] md:text-6xl lg:font-bold leading-[2.2rem] md:leading-[4rem] lg:leading-[4.2rem] tracking-wider">
          Empowering Small {" "}<span>Businesses</span> <br/> <span> to {" "} </span>
          <span className="text-[#01BF74]  items-center gap-1 inline-flex">Grow
            <img
                className="w-7 ms-2 h-7 lg:w-14 lg:h-14"
                src="/img/icon/img.png"
                alt=""
            />
          </span>{" "}
          and {" "}
          <span className="text-[#417DFF]  items-center gap-1 inline-flex">
            Succeed
            <img
                className="w-7 lg:ms-2 h-7 lg:w-14 lg:h-14"
                src="/img/icon/img_1.png"
                alt=""
            />
          </span>{" "}
          Equitably
        </h2>
      </div>
    </div>
  );
};

export default Introduction;
