import React from 'react';
import { FaGooglePlay, FaApple, FaThumbsUp, FaLightbulb } from 'react-icons/fa';

const avatars = [
    '/img/avatar1.png',
    '/img/avatar2.png',
    '/img/avatar3.png'
];

const Banner = () => {
    return (
        <section className="flex flex-col items-center justify-center p-8">
            <h1 className="text-7xl font-bold my-5 text-center mb-6">
                <span className="text-[#01BF74]">Revolutionize</span> Business <br/> with Short Videos!
            </h1>

            <div className="relative mt-10 flex flex-col lg:flex-row items-center justify-center mb-3 gap-0">
                <div className="flex flex-col space-y-20 items-start gap-6">
                    <img className={"w-60 h-32"} src="/img/buttons/Frame%2086.png" alt=""/>
                    <img className={"w-60 h-32"} src="/img/buttons/Group%2010.png" alt=""/>
                </div>
                <div className="relative">
                    <div className={"w-7/12 mx-auto"}>
                        <video
                            src="/video/intro.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[500px] p-4 scale-125  mx-auto h-[800px] rounded-lg"
                        />
                    </div>
                </div>
                <img className={"w-60 h-32"} src="/img/buttons/Frame%2091.png" alt=""/>
            </div>
            <p className="text-center text-lg my-4">Download Pitchle and start growing <br/> your business today!</p>
            <div className="flex mt-5 gap-4">
                <button className="flex items-center bg-black text-white px-4 py-4 rounded-lg shadow-lg">
                <img className={"w-7 h-7 me-2"} src="/img/logo/apple.png" alt=""/> <span
                    className={"text-md font-semibold"}>Google Play</span>
                </button>
                <button className="flex items-center bg-black text-white px-4 py-4 rounded-lg shadow-lg">
                    <img className={"w-7 h-7 me-2"} src="/img/logo/playstore.png" alt=""/> <span
                    className={"text-md font-semibold"}>Google Play</span>
                </button>
            </div>
        </section>
    );
};

export default Banner;
