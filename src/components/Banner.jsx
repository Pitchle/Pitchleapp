import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-cards'; // Import Swiper effect styles
import { EffectCards } from 'swiper/modules'; // Import Swiper modules

// import required modules
const Banner = () => {
    return (
        <>
            <div className="lg:pt-8 pt-4 md:pt-10 md:py-12 xl:container m-auto min-h-screen px-6 md:px-12" id={"home"}>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
                />
                <div className="relative lg:flex-row flex flex-col-reverse lg:items-center lg:gap-12">
                    <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                        <h1 className="text-white font-bold text-4xl md:text-7xl"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            FULLY BUSINESS ORIENTED APP{" "}
                        </h1>
                        <p className="mt-8 text-2xl md:text-3xl  text-white"
                           data-aos="fade-right"
                           data-aos-offset="200"
                           data-aos-duration="500"
                           data-aos-easing="ease-in-sine">
                            Join our vibrant community and revolutionize the way you do business!
                        </p>
                                <div
                                    data-aos="fade-right"
                                    data-aos-offset="100"
                                    data-aos-easing="ease-in-sine"
                                    className="flex flex-row w-8/12 mt-10 gap-2 justify-center items-center lg:pe-40 px-0 md:px-0 md:flex-row w-full">
                                    <a
                                        href="https://play.google.com/store/games?hl=en&gl=US&pli=1"
                                        target="_blank"
                                        className="flex scale-ani items-center justify-center w-8/12 md:w-full px-4 py-2 text-center text-white bg-[#450073] rounded-2xl"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            className="w-6"
                                            viewBox="-9 0 274 274"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                                                    fill="#FFD900"
                                                />
                                                <path
                                                    d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                                                    fill="#F43249"
                                                />
                                                <path
                                                    d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                                                    fill="#00EE76"
                                                />
                                                <path
                                                    d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                                                    fill="#00D3FF"
                                                />
                                            </g>
                                        </svg>
                                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                                            <span className="text-sm text-white">Get it on</span>
                                            <span className="text-base font-semibold text-white">Play Store</span>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.apple.com/app-store/"
                                        target="_blank"
                                        className="flex scale-ani items-center justify-center w-8/12  md:w-full px-4 py-2 text-center text-white bg-[#450073] rounded-2xl"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            className="w-6"
                                            viewBox="0 0 40 45"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width={40} height={45} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                                            <span className="text-sm text-white">Get it on</span>
                                            <span className="text-base font-semibold text-white">App Store</span>
                                        </div>
                                    </a>

                                </div>

                    </div>
                    <div className="h-[32rem] scale-ani overflow-hidden mt-0 mb-16 lg:mb-0 lg:mt-6 w-full lg:w-8/12 lg:-mr-16"
                         data-aos="fade-left"
                         data-aos-offset="100"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-sine">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            autoplay={{ delay: 5000 }} // Set autoplay delay (in milliseconds)
                            className="mySwiper h-full"
                        >
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/Splash%20Screen.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/Account%20Creation.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/Profile%20Details.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/More%20Details.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/Record%20Video.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/new-updated.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/updated.jpg" alt="screen"/></SwiperSlide>
                            <SwiperSlide><img className={"object-fill h-full w-full"} src="/img/banner/Notifications.jpg" alt="screen"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;