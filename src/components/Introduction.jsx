import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Introduction = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides in desktop view
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 slides on iPad
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide in mobile view
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <>
                <h3 className={"text-center text-[#450073] my-16 text-3xl md:text-4xl lg:text-6xl font-bold"}>Looking
                    for?</h3>
                <div className={"w-full flex justify-center"}>
                    <div className={"w-10/12 ms-0 md:ms-10 lg:ms-20"}>
                        <Slider {...settings}>
                            <div
                                className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                                <div className="h-full w-full">
                                    <div className="relative w-full">
                                        <img
                                            src="/img/banner/Home.jpg"
                                            className="mb-3 h-full w-full h-[30rem] -mt-10 md:mt-0 lg:-mt-10 rounded-xl 3xl:h-full 3xl:w-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                                    </div>
                                    <div
                                        className="flex items-center justify-between md:items-center lg:justify-between ">
                                        <button
                                            href=""
                                            className="linear rounded-[20px] bg-[#450073] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                                        >
                                            Partner
                                        </button>
                                        <div className="flex">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                                <div className="h-full w-full">
                                    <div className="relative w-full">
                                        <img
                                            src="/img/banner/Home-4.jpg"
                                            className="mb-3 h-full w-full h-[30rem] -mt-10 md:mt-0 lg:-mt-10 rounded-xl 3xl:h-full 3xl:w-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                                    </div>
                                    <div
                                        className="flex items-center justify-between md:items-center lg:justify-between ">
                                        <button
                                            href=""
                                            className="linear rounded-[20px] bg-[#450073] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                                        >
                                            Investor
                                        </button>
                                        <div className="flex">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                                <div className="h-full w-full">
                                    <div className="relative w-full">
                                        <img
                                            src="/img/banner/Home-3.jpg"
                                            className="mb-3 h-full w-full h-[30rem] -mt-10 md:mt-0 lg:-mt-10 rounded-xl 3xl:h-full 3xl:w-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                                    </div>
                                    <div
                                        className="flex items-center justify-between md:items-center lg:justify-between ">
                                        <button
                                            href=""
                                            className="linear rounded-[20px] bg-[#450073] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                                        >
                                            Sell
                                        </button>
                                        <button
                                            href=""
                                            className="linear rounded-[20px] bg-[#450073] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                                        >
                                            Transfer
                                        </button>
                                        <button
                                            href=""
                                            className="linear rounded-[20px] bg-[#450073] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                                        >
                                            Business
                                        </button>
                                        <div className="flex">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
        </>
    );
};

export default Introduction;
