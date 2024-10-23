import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Introduction = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const handleImageHover = (imageUrl) => {
        setHoveredImage(imageUrl);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <>
            <h3 className="text-center text-[#450073] mt-14 md:mt-4 mb-0 md:mb-4 text-3xl md:text-4xl lg:text-6xl font-bold"
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine">
                Looking for?
            </h3>
            <div className="w-full flex justify-center pb-16">
                <div className="w-[300px] md:w-10/12 ms-0 h-[40rem] md:ms-10 lg:ms-20">
                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div key={index}
                                 data-aos="fade-right"
                                 data-aos-offset="200"
                                 data-aos-duration={(index + 1) * 300 + 500}
                                 data-aos-easing="ease-in-sine"
                                 className="relative mt-16 md:mt-28 ms-2.5 flex flex-col rounded-[20px] max-w-[310px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 bg-white"
                                 onMouseLeave={handleMouseLeave}
                            >
                                <div className="w-full border-2 bg-gray-100 rounded-md p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}>
                                    <div className="relative w-full" onMouseEnter={() => handleImageHover(slide.image)}>
                                        <img
                                            src={slide.image}
                                            className="mb-3 rounded-md w-full h-[29rem] rounded-xl"
                                            alt=""
                                        />
                                        {hoveredImage && hoveredImage === slide.image && (
                                            <img
                                                src={slide.hoverImage}
                                                className="mb-3 rounded-md w-full h-[32rem] z-10 rounded-xl absolute top-4 left-3 -mt-24 transform translate-x-4"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                    <div className="mb-3 flex items-center justify-between px-1 md:items-start"></div>
                                    <div className="flex items-center justify-evenly">
                                        {slide.buttons.map((button, btnIndex) => (
                                            <button
                                                key={btnIndex}
                                                className="linear rounded-[20px] bg-[#450073] px-3 py-2 text-base text-sm text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                                            >
                                                {button.text === "Partner" ? (
                                                    <span translate="no">{button.text}</span>
                                                ) : (
                                                    button.text
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Introduction;


const slidesData = [
    {
        image: "/img/new_images/Mockup%20(2).png",
        hoverImage: "/img/new_images/Mockup%20(4).png",
        buttons: [{ text: "Partner" }, { text: "Investor" }],
    },
    {
        image: "/img/new_images/Mockup%20(5).png",
        hoverImage: "/img/new_images/Mockup%20(6).png",
        buttons: [{ text: "Sell" }, { text: "Transfer" }, { text: "Business" }],
    },
    {
        image: "/img/new_images/Mockup%20(7).png",
        hoverImage: "/img/new_images/Mockup%20(7).png",
        buttons: [{ text: "Promote" }, { text: "Product" }],
    },
];
