import React from 'react';

const Philosophy = () => {
    return (
        <div className={"flex flex-col items-center space-y-10 justify-center py-32"}>
            <div
                className={"lg:w-10/12 w-11/12 scale-ani text-black text-center lg:px-20 px-4 py-16 rounded-2xl bg-[#a9abfe]"}>
                <h3 className={"lg:text-6xl text-3xl text-white font-bold"}> Ready to take your
                    business <br/> connections to the next level?</h3>
            </div>
            <div className={"lg:w-10/12 scale-ani w-11/12 text-black text-center lg:px-20 px-4 mx-4 py-16 rounded-2xl bg-[#a9abfe]"}>
                <h3 className={"lg:text-4xl text-2xl text-white font-bold"}>
                    Sign up for Pitchle today and unlock a world of possibilities. <br/>
                    With Pitchle, your next big opportunity is just a pitch away. <br/>
                </h3>
                <div className={"mt-10"}>
                    <span className={"lg:text-5xl font-bold text-black text-2xl"}>
                        Don't miss out—join our vibrant community <br/> and revolutionize the way you do business
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Philosophy;