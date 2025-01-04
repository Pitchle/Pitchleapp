import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Introduction = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [activeImages, setActiveImages] = useState(slidesData.map(slide => slide.image));

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImages(prevImages =>
                prevImages.map((image, index) =>
                    image === slidesData[index].image ? slidesData[index].hoverImage : slidesData[index].image
                )
            );
        }, 4000); // Change images every 4 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleImageHover = (imageUrl) => {
        setHoveredImage(imageUrl);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const settings = {
        dots: true, // Keep dots enabled
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Desktop and above
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false, // Hide dots on larger screens
                },
            },
            {
                breakpoint: 768, // Tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true, // Show dots on smaller screens
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
                                            src={activeImages[index]}
                                            className="mb-3 rounded-md w-full h-[29rem] rounded-xl transition-opacity duration-1000 ease-in-out" // Smooth fade
                                            alt=""
                                        />
                                        {hoveredImage && hoveredImage === slide.image && (
                                            <img
                                                src={slide.hoverImage}
                                                className="mb-3 rounded-md w-full h-[32rem] z-10 rounded-xl absolute top-2 left-10 -mt-20 transform translate-x-4 transition-transform duration-700 ease-in-out" // Zoom effect
                                                alt=""
                                                style={{ transform: 'scale(1.05)' }} // Apply zoom effect
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
        image: "/img/updated-images/iPhone-13-Pro-Front-10.png",
        hoverImage: "/img/updated-images/iPhone-13-Pro-Front-8.png",

        buttons: [{ text: "Sell" }, { text: "Transfer" }, { text: "Business" }],
    },
    {
        image: "/img/updated-images/iPhone-13-Pro-Front-4.png",
        hoverImage: "/img/updated-images/iPhone-13-Pro-Front-6.png",
        buttons: [{ text: "Partner" }, { text: "Investor" }],
    },
    {
        image: "/img/updated-images/iPhone-13-Pro-Front-11.png",
        hoverImage: "/img/updated-images/iPhone-13-Pro-Front-14.png", // Ensure this is a different hover image
        buttons: [{ text: "Promote" }, { text: "Product" }],
    },
];
