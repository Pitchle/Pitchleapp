import React from 'react';

const Feature = () => {
    return (
        <>
          <div className={"w-full my-32"}>
            <div className={"lg:w-8/12 w-full mx-auto flex flex-col justify-center ps-1 "}>
                <div className={"w-11/12 flex flex-col md:flex-row justify-between"}>
                    <div className={"w-4/12 flex justify-center item-center flex-col text-center rounded-full bg-[#450073] text-white h-[23rem] w-[23rem]"}>
                        <h3 className={"w-full text-4xl font-bold my-4"}>Video</h3>
                        <p>Showcase your ideas, projects, or business <br/> offerings through  engaging 30-second (free) or <br/> 60-second (paid)  video pitches, showcasing your ideas,<br/> projects, or investment opportunities.<br/> With customizable backgrounds available <br/>for a fee (optional),your pitch will<br/> stand out from the crowd</p>
                    </div>
                    <div className={"w-4/12 flex justify-center item-center p-4 flex-col text-center rounded-full bg-[#450073] text-white h-[18rem] w-[18rem]"}>
                        <h3 className={"w-full text-4xl font-bold my-4"}> Global Accessibility</h3>
                    </div>
                </div>
                <div className={"w-full justify-center items-center"}>
                    <div className={"w-4/12 flex mx-auto justify-center item-center flex-col text-center rounded-full text-white h-[15rem] w-[15rem]"}>
                        <img src="/img/logo/logo.png" alt="logo"/>
                    </div>
                </div>
                <div className={"w-11/12 flex justify-between flex-col md:flex-row"}>
                    <div className={"w-4/12 flex justify-center item-center flex-col text-center rounded-full bg-[#450073] text-white h-[15rem] w-[15rem]"}>
                        <h3 className={"w-full text-4xl font-bold my-4"}>Customer Support</h3>
                    </div>
                    <div className={"w-4/12 flex justify-center item-center flex-col text-center rounded-full bg-[#450073] text-white h-[20rem] w-[20rem]"}>
                        <h3 className={"w-full text-4xl font-bold my-4"}>Privacy and Security</h3>
                        <p>You have full control over your privacy<br/> settings,allowing you to manage <br/> who can  view your <br/>  profiles and pitches.</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default Feature;