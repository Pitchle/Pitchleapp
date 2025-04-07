import React from 'react';

const Banner = () => {
    return (
        <section className="flex flex-col items-center justify-center p-4 lg:p-81">
            {/* Heading */}
            <h1 className="text-3xl font-bold mt-5 text-center lg:text-8xl">
                <span className="text-[#01BF74]">Revolutionize</span> Business <br/> with Short Videos!
            </h1>

            {/* Video and Buttons Section */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center mb-3 gap-6">

                {/* Desktop View */}
                <div className="hidden lg:flex flex-row items-center gap-6">
                    {/* Left Side Buttons */}
                    <div className="flex flex-col space-y-40 items-start gap-6">
                        <img className={"w-60 lg:scale-150 -mt-32 h-32"} src="/img/buttons/Frame%2086.png" alt=""/>
                        <img className={"w-60 lg:scale-150 h-32"} src="/img/buttons/Group%2010.png" alt=""/>
                    </div>

                    {/* Video Section */}
                    <div className="relative">
                        <div className={"w-9/12 mx-auto"}>
                            <video
                                src="/video/intro.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-[500px] p-4 scale-105 mx-auto h-[800px] rounded-lg"
                            />
                        </div>
                    </div>

                    <img className={"w-60 lg:scale-150 h-32"} src="/img/buttons/Frame%2091.png" alt=""/>
                </div>
                <div className="flex flex-col items-center gap-4 mt-0 lg:mt-6 lg:hidden">
                    <div className="relative w-full flex justify-center">
                        <div className="w-full  lg:w-7/12 mx-auto">
                            <video
                                src="/video/intro.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-[300px] h-[600px] p-4 mx-auto rounded-lg"
                            />
                        </div>
                    </div>
                    <img className="w-40 h-24 ms-28" src="/img/buttons/Frame%2091.png" alt=""/>

                    <svg className={"me-32 -mt-10"} width="62" height="54" viewBox="0 0 62 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.82872 52.9623C7.22526 53.3467 7.85834 53.3369 8.24277 52.9404L14.5073 46.4786C14.8918 46.082 14.8819 45.449 14.4854 45.0645C14.0889 44.6801 13.4558 44.6899 13.0714 45.0864L7.50287 50.8303L1.75902 45.2618C1.36249 44.8774 0.729404 44.8872 0.34498 45.2837C-0.0394502 45.6802 -0.029636 46.3133 0.366897 46.6978L6.82872 52.9623ZM61.7366 2.12992C46.3775 -1.4803 32.4087 2.37783 22.3554 11.5294C12.3135 20.6706 6.25763 35.0169 6.52491 52.2598L8.52467 52.2288C8.26488 35.4686 14.1471 21.706 23.7018 13.0084C33.245 4.32108 46.5313 0.610363 61.279 4.07686L61.7366 2.12992Z"
                            fill="#01BF74"/>
                    </svg>

                    <img className="w-40 h-24 -mt-8 me-32" src="/img/buttons/Frame%2086.png" alt=""/>

                    <svg  className={"ms-28 -mt-16"} width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.6791 53.0018C55.2826 53.3862 54.6495 53.3764 54.265 52.9798L48.0005 46.518C47.6161 46.1215 47.6259 45.4884 48.0224 45.104C48.4189 44.7195 49.052 44.7293 49.4364 45.1259L55.0049 50.8697L60.7488 45.3012C61.1453 44.9168 61.7784 44.9266 62.1628 45.3231C62.5473 45.7197 62.5374 46.3528 62.1409 46.7372L55.6791 53.0018ZM0.771182 2.16935C16.1303 -1.44087 30.0991 2.41726 40.1524 11.5688C50.1943 20.71 56.2502 35.0563 55.9829 52.2993L53.9831 52.2683C54.2429 35.508 48.3607 21.7454 38.8061 13.0478C29.2628 4.36051 15.9765 0.649791 1.22882 4.11629L0.771182 2.16935Z"
                            fill="#01BF74"/>
                    </svg>

                    <img className="w-40 h-24 mt-3 ms-28 " src="/img/buttons/Group%2010.png" alt=""/>
                </div>
            </div>
            <svg className={"block md:hidden"} width="62" height="54" viewBox="0 0 62 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.82872 52.9623C7.22526 53.3467 7.85834 53.3369 8.24277 52.9404L14.5073 46.4786C14.8918 46.082 14.8819 45.449 14.4854 45.0645C14.0889 44.6801 13.4558 44.6899 13.0714 45.0864L7.50287 50.8303L1.75902 45.2618C1.36249 44.8774 0.729404 44.8872 0.34498 45.2837C-0.0394502 45.6802 -0.029636 46.3133 0.366897 46.6978L6.82872 52.9623ZM61.7366 2.12992C46.3775 -1.4803 32.4087 2.37783 22.3554 11.5294C12.3135 20.6706 6.25763 35.0169 6.52491 52.2598L8.52467 52.2288C8.26488 35.4686 14.1471 21.706 23.7018 13.0084C33.245 4.32108 46.5313 0.610363 61.279 4.07686L61.7366 2.12992Z"
                    fill="#01BF74"/>
            </svg>
            {/* Text and Download Buttons */}
            <p className="text-center text-xl lg:text-3xl my-4">Download Pitchle and start growing <br/> your business today!</p>
            <div className="flex mt-5 gap-2">
                <button
                    className="flex items-center bg-gradient-to-r from-[#383838] to-[#000000]  text-white px-4 lg:px-7 py-3 lg:py-4 rounded-lg shadow-lg">
                    <img className="w-5 h-5 lg:w-7 lg:h-7 me-2" src="/img/logo/apple.png" alt=""/>
                    <span className="text-lg font-semibold">Apple Store</span>
                </button>
                <button
                    className="flex items-center bg-gradient-to-r from-[#383838] to-[#000000]  text-white px-4 lg:px-7 py-3 lg:py-4 rounded-lg shadow-lg">
                    <img className="w-5 h-5 lg:w-7 lg:h-7 me-2" src="/img/logo/playstore.png" alt=""/>
                    <span className="text-lg font-semibold">Google Play</span>
                </button>
            </div>
        </section>
    );
};

export default Banner;
