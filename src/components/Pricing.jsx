import React from 'react';
import NavbarBar from "./NavbarBar";
import Slider from "react-slick";

// Data array with different card information
const Individual = [
    {
        heading: 'Free',
        headingColor: 'black',
        badgeText: 'Individual Free Plan',
        badgeTextColor: 'white',
        badgeColor: '#2f7a8f',
        bulletPoints: [
            'Upload max 30 seconds pitches',
            'Pitch Visibility: Public',
            'Sell or transfer business',
            'Promote a Product',
        ],
        gradientFrom: 'from-green-300',
        gradientOpacity: 'opacity-20',
    },
    {
        heading: '$6.99',
        headingColor: 'black',
        subHeading: 'monthly', // Add subheading for monthly/yearly plans
        badgeText: 'Individual 1 time publication',
        badgeTextColor: 'white',
        badgeColor: '#2f8f45',
        bulletPoints: [
            'Upload max 60 seconds pitches',
            'Pitch Visibility: Public',
            'Sell or transfer business',
            'Promote Products',
        ],
        gradientFrom: 'from-blue-300',
        gradientOpacity: 'opacity-30',
    },
    {
        heading: '$9.99',
        headingColor: 'black',
        subHeading: 'monthly',
        badgeText: 'Explorer',
        badgeTextColor: 'white',
        badgeColor: '#235b8c',
        bulletPoints: [
            'Upload max 60 seconds pitches',
            'Pitch Visibility: Public and Private',
            'Watermark/copyright in videos',
            'Sell or transfer business',
            'Access who’s viewed your profile feature',
            'Promote Products',
        ],
        gradientFrom: 'from-blue-300',
        gradientOpacity: 'opacity-30',
    },
    {
        heading: '$99.99',
        headingColor: 'black',
        subHeading: 'year',
        badgeText: 'Visionary',
        badgeTextColor: 'white',
        badgeColor: '#235b8c',
        bulletPoints: [
            'Upload max 60 seconds pitches',
            'Pitch Visibility: Public and Private',
            'Watermark/copyright in videos',
            'Sell or transfer business',
            'Access who’s viewed your profile feature',
            'Promote Products',
        ],
        gradientFrom: 'from-blue-300',
        gradientOpacity: 'opacity-30',
    },
];
const investor = [{
    heading: 'Free',
    headingColor: 'black',
    subHeading: '',
    badgeText: 'Investor Free Plan',
    badgeTextColor: 'white',
    badgeColor: '#6bb12d',
    bulletPoints: [
        'Upload max 30 seconds pitches',
        'Pitch Visibility: Public',
        'Sell or transfer business',
        'Promote a Product',
    ],
    gradientFrom: 'from-red-300',
    gradientOpacity: 'opacity-30',
},
    {
        heading: '$8.99',
        headingColor: 'black',
        subHeading: 'monthly',
        badgeText: 'Investor 1 time publication',
        badgeTextColor: 'white',
        badgeColor: '#b12d2d',
        bulletPoints: [
            'Upload max 60 seconds pitches',
            'Pitch Visibility: Public',
            'Sell or transfer business',
            'Promote Products',
        ],
        gradientFrom: 'from-red-300',
        gradientOpacity: 'opacity-30',
    },
    {
        heading: '$11.99',
        headingColor: 'black',
        subHeading: 'monthly',
        badgeText: 'Investor',
        badgeTextColor: 'black',
        badgeColor: '#f6be2c',
        bulletPoints: [
            'Upload max 60 seconds pitches',
            'Pitch Visibility: Public and Private',
            'Watermark/copyright in videos',
            'Sell or transfer business',
            'View individual profiles and contact them directly',
            'Choose multiple locations',
            'Access who’s viewed your profile feature',
            'Promote Products',
        ],
        gradientFrom: 'from-yellow-300',
        gradientOpacity: 'opacity-30',
    },
    {
        heading: '$119.99',
        headingColor: 'black',
        subHeading: 'year',
        badgeText: 'Investor x',
        badgeTextColor: 'black',
        badgeColor: '#f6be2c',
        bulletPoints: [
            'Upload max 60 seconds pitches',
            'Pitch Visibility: Public and Private',
            'Watermark/copyright in videos',
            'Sell or transfer business',
            'View individual profiles and contact them directly',
            'Choose multiple locations',
            'Access who’s viewed your profile feature',
            'Promote Products',
        ],
        gradientFrom: 'from-yellow-300',
        gradientOpacity: 'opacity-30',
    },];

const settings = {
    dots: true, // Keep dots enabled
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

const PricingCard = ({
                         heading,
                         headingColor,
                         subHeading,
                         badgeText,
                         bulletPoints,
                         gradientFrom,
                         gradientOpacity,
                         badgeColor,
                         badgeTextColor
                     }) => {
    return (
        <div className="relative my-10 ms-5 md:ms-2 mx-2 bg-white hover:border-gray-500 shadow-md hover:shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-[#450073] hover:via-[#01be74] hover:to-[#450073] rounded-lg h-[440px] w-[330px] hover:z-10 hover:scale-105 md:hover:scale-105 transition-all duration-300 ease-in-out p-5 overflow-hidden">
            {/* Add the circular gradient */}
            <div
                className={`absolute -bottom-3 blur-md -left-5 w-32 h-32 bg-gradient-to-t ${gradientFrom} to-transparent rounded-full ${gradientOpacity}`}></div>

            {/* Badge */}
            <div className="text-center">
                <span
                    style={{backgroundColor: badgeColor, color: badgeTextColor}}
                    className="text-sm font-semibold px-6 py-2 rounded-md uppercase tracking-wide">
                    {badgeText}
                </span>
            </div>

            {/* Title */}
            <h2 className={`text-4xl font-bold text-center mt-6 ${headingColor}`}>{heading}</h2>

            {/* Conditionally render the subheading */}
            {subHeading && <p className="text-center font-semibold text-lg ">{subHeading}</p>}

            {/* List */}
            <ul className="mt-4 text-center space-y-1 text-gray-700 ">
                {bulletPoints.map((point, index) => (
                    <li key={index}>• {point}</li>
                ))}
            </ul>
        </div>
    );
};

const Pricing = () => {
    return (
        <>
            <NavbarBar/>
            <div className="text-center"><h2 className="font-bold -ms-0 md:-ms-8 my-6 text-3xl md:text-5xl">Individual
                Plans</h2></div>
            <div className={"w-full flex justify-center"}>
                <div className={"w-11/12"}>
                    <Slider {...settings}>
                        {Individual.map((plan, index) => (
                            <PricingCard
                                key={index}
                                heading={plan.heading}
                                headingColor={plan.headingColor}
                                subHeading={plan.subHeading} // Pass subheading prop
                                badgeText={plan.badgeText}
                                badgeTextColor={plan.badgeTextColor}
                                badgeColor={plan.badgeColor}
                                bulletPoints={plan.bulletPoints}
                                gradientFrom={plan.gradientFrom}
                                gradientOpacity={plan.gradientOpacity}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="text-center">
                <h2 className="font-bold -ms-0 md:-ms-8 my-6 text-3xl md:text-5xl">Investor Plans</h2>
            </div>
            <div className={"w-full flex justify-center"}>
                <div className={"w-11/12 mb-10 md:mb-0 h-full"}>
                    <Slider {...settings}>
                        {investor.map((plan, index) => (
                            <PricingCard
                                key={index}
                                heading={plan.heading}
                                headingColor={plan.headingColor}
                                subHeading={plan.subHeading} // Pass subheading prop
                                badgeText={plan.badgeText}
                                badgeTextColor={plan.badgeTextColor}
                                badgeColor={plan.badgeColor}
                                bulletPoints={plan.bulletPoints}
                                gradientFrom={plan.gradientFrom}
                                gradientOpacity={plan.gradientOpacity}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Pricing;
