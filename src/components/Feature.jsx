import React from 'react';
import {SiTicktick} from "react-icons/si";

const Feature = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 mt-8 md:mt16">
                <div className="text-center">
                    <h2 className="font-bold text-5xl">Key Features and Benefits</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-20">
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96">
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-2xl items-center flex font-medium">
      <SiTicktick className={"text-blue-700"}/> &nbsp;Video Pitches
    </span>
                        </div>

                        <div className="p-4">
                            <p className="leading-normal ">
                                Post your ideas, business offers and product promotions through attractive 30 second
                                (free)
                                or 60 second (paid) videos.
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96">
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-2xl items-center flex font-medium">
      <SiTicktick className={"text-blue-700"}/> &nbsp;Easy to use
    </span>
                        </div>

                        <div className="p-4">
                            <p className="leading-normal ">
                                Designed to be simple and easy to use.
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96">
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-2xl items-center flex font-medium">
      <SiTicktick className={"text-blue-700"}/> &nbsp;AI
    </span>
                        </div>

                        <div className="p-4">
                            <p className="leading-normal ">
                                <span translate="no">Pitchle </span> uses AI to automate tasks efficiently.
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96">
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-2xl items-center flex font-medium">
      <SiTicktick className={"text-blue-700"}/> &nbsp;Customer Support
    </span>
                        </div>

                        <div className="p-4">
                            <p className="leading-normal ">
                                Enjoy dedicated customer support to assist you every step of the way.
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96">
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-2xl items-center flex font-medium">
      <SiTicktick className={"text-blue-700"}/> &nbsp;Privacy & Security
    </span>
                        </div>

                        <div className="p-4">
                            <p className="leading-normal ">
                                Manage your privacy settings to control who can view your profile and pitches (paid
                                subscription).
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 md:w-96">
                        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-2xl items-center flex font-medium">
      <SiTicktick className={"text-blue-700"}/> &nbsp;Subscription Plans
    </span>
                        </div>

                        <div className="p-4">
                            <p className="leading-normal ">
                               <ul>
                                   <li>*Free under its 30-second video model.</li>
                                   <li>*Paid:60-second video.  </li>
                                   <li>*Subscriptions: one-time use, monthly, or annual plans. </li>
                               </ul>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Feature;
