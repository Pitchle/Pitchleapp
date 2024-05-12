import React from 'react';

const Philosophy = () => {
    return (
        <div className={"flex justify-center py-16"}>
            <div className={"lg:w-10/12 w-full text-white text-center lg:px-20 px-4 py-32 rounded-2xl bg-gradient-to-r from-[#450073] to-[#7200bf]"}>
                <h3 className={"lg:text-6xl text-3xl font-bold"}> Ready to take your business <br/> connections to the next level?</h3>
                <p className={"text-md mt-10 font-bold text-md"}> Sign up for Pitchle today and unlock a world of possibilities.
                    With Pitchle, your next big opportunity is just a pitch away.
                    Don't miss out—join our vibrant community and revolutionize the way you do business
                    .</p>

                <button
                    href=""
                    className="linear rounded-md mt-16 bg-white text-black px-4 py-4 text-base font-medium transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                >
                    Get Starter Now
                </button>
            </div>
        </div>
    );
};

export default Philosophy;