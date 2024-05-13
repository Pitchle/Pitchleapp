import React from 'react';

const Philosophy = () => {
    return (
        <div className={"flex flex-col items-center space-y-4 justify-center py-32"}>
            <div
                className={"lg:w-10/12 w-11/12 scale-ani text-black text-center lg:px-20 px-4 py-16 rounded-2xl bg-[#a9abfe]"}>
                <h3 className={"lg:text-6xl text-3xl font-bold"}> Ready to take your business <br/> connections to the next level?</h3>
            </div>
            <img src="/img/logo/arrow.png" className={"w-20 scale-ani  v-animation h-20"} alt="arrow"/>
            <div className={"lg:w-10/12 scale-ani w-11/12 text-black text-center lg:px-20 px-4 mx-4 py-16 rounded-2xl bg-[#a9abfe]"}>
                <h3 className={"lg:text-3xl text-2xl font-bold"}>  Sign up for Pitchle today and unlock a world of possibilities.
                    With Pitchle, your next big opportunity is just a pitch away.
                    Don't miss out—join our vibrant community and revolutionize the way you do business</h3>

                <button
                    href=""
                    className="linear scale-ani rounded-md mt-16 bg-white text-black px-4 py-4 text-base font-medium transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                >
                    Get Starter Now
                </button>
            </div>

        </div>
    );
};

export default Philosophy;