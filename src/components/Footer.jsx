import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const bgColor = location.pathname === "/blog" ? "bg-white" : "bg-[#f6f6f6]";

  const handleSubscribe = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmail("");
    setEmailError("");

    toast.success(
      "Thanks for subscribing! You’ll get all updates from this site."
    );
    requestNotificationPermission();
  };

  const requestNotificationPermission = () => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Subscription Successful!", {
            body: "You will receive updates for new blogs.",
            icon: "/img/logo/logo.png", // Make sure this path exists
          });
        }
      });
    }
  };

  return (
    <div className="flex justify-center">
      <footer
        className={`${bgColor} w-full m-2 py-10 px-4 text-[#343434] lg:m-4 lg:px-10 rounded-3xl mt-10`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="w-full sm:w-11/12 mx-auto lg:p-0">
          {/* Row 1: Brand (left) + Newsletter (right) */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Brand */}
            <div className="flex flex-col justify-center items-center md:items-start mb-8 self-baseline">
              <div className="flex items-center space-x-3">
                <img
                  src="/img/logo/logo.png"
                  alt="Pitchle Logo"
                  className="w-16 h-16 scale-105 rounded-full"
                />
                <h2 className="text-3xl lg:text-4xl font-semibold">Pitchle</h2>
              </div>
              <p className="text-center md:text-left text-[22pxs] lg:text-base mt-4 sm:w-auto w-1/2 font-medium">
                The Social Network <br className="hidden md:block" />
                for Business &amp; Commerce
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full lg:w-6/12">
              <h3 className="text-[1.3rem] lg:text-3xl text-center md:text-left mb-4 font-extrabold tracking-normal sm:tracking-wide">
                Stay Updated with Our Latest News &amp; Offers!
              </h3>
              <p className="text-center md:text-left text-sm lg:text-lg mb-4 tracking-tight ">
                Subscribe to our newsletter for exclusive updates, business
                tips, and special offers.
              </p>
              <div className="flex flex-col items-center md:items-start ">
                <div className="flex w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="border-2 border-blue-500 placeholder-black placeholder:text-sm rounded-full px-4 py-3 lg:py-3 focus:outline-none w-2/3 lg:w-8/12"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="ml-3 w-[min-content] bg-[#417DFF] text-white text-base font-semibold text-center lg:text-xl px-2 lg:px-6 py-1 lg:py-0  rounded-full hover:bg-blue-600 transition  lg:w-5/10"
                  >
                    Subscribe
                  </button>
                </div>
                {emailError && (
                  <span className="text-red-500 text-sm mt-2">
                    {emailError}
                  </span>
                )}
              </div>
              {/* Row 2: Company | Legal | Connect */}
              <div className="flex flex-col lg:flex-row justify-between mt-10 px-5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                  {/* Company */}
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl mb-4">
                      Company
                    </h4>
                    <ul className="space-y-1 text-sm lg:text-base">
                      {[
                        { name: "About Us", path: "/about" },
                        { name: "Plans", path: "/plans" },
                        { name: "We Care", path: "/about#CARE" },
                        { name: "Blog", path: "/blog" },
                        { name: "FAQs", path: "/#FAQ" },
                      ].map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={`relative group transition duration-300 ${
                              location.pathname === item.path
                                ? "underline underline-offset-4"
                                : ""
                            }`}
                          >
                            {item.name}
                            <span className="block h-[2px] w-0 bg-[#1e88e5] transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Legal */}
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl mb-4">Legal</h4>
                    <ul className="space-y-1 text-sm lg:text-base">
                      {[
                        { name: "Privacy Policy", path: "/privacy" },
                        { name: "Terms of Services", path: "/terms" },
                      ].map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className="relative group transition duration-300"
                          >
                            {item.name}
                            <span className="block h-[2px] w-0 bg-[#1e88e5] transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connect */}
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl mb-4">
                      Connect
                    </h4>
                    <a
                      href="mailto:contact@pitchleapp.com"
                      className="block text-sm lg:text-base font-medium hover:underline"
                    >
                      contact@pitchleapp.com
                    </a>
                    <div className="flex mt-4 space-x-2">
                      <a
                        href="https://www.linkedin.com/company/pitchle/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-[#01BF74] w-12 h-12 flex items-center justify-center rounded-full">
                          <FaLinkedin size={24} className="text-white" />
                        </div>
                      </a>
                      <a
                        href="https://www.youtube.com/@Pitchle"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-[#01BF74] w-12 h-12 flex items-center justify-center rounded-full">
                          <FaYoutube size={24} className="text-white" />
                        </div>
                      </a>
                      <a
                        href="https://apps.apple.com/us/app/pitchle/id6677026938"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-[#01BF74] w-12 h-12 flex items-center justify-center rounded-full">
                          <FaApple size={24} className="text-white" />
                        </div>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.pitchle.pitchleApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-[#01BF74] w-12 h-12 flex items-center justify-center rounded-full">
                          <FaGooglePlay size={24} className="text-white" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-sm lg:text-base">
            © 2025 Pitchle. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
