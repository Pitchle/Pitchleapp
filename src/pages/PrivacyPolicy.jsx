import React from 'react';
import NavbarBar from "../components/NavbarBar";

const PrivacyPolicy = () => {
    return (
        <>
            <NavbarBar/>
            <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        This Privacy Policy describes how Pitchle app ("the App") collects, uses, and shares your information when you use the App. By accessing or using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information Collection and Use</h2>
                        <ul className="list-disc list-inside text-gray-700 pl-4">
                            <li>Personal Information: We may collect personal information, such as your name, email address, and other contact information, when you register an account on the App.</li>
                            <li>Usage Data: We may also collect information about how you access and use the App, such as your device information, log data, and usage patterns.</li>
                            <li>User Content: Any content that you post, upload, or otherwise make available on the App, including messages and comments, may be collected and stored by us.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use of Information</h2>
                        <p className="text-gray-700">
                            We may use the information we collect for various purposes, including to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 pl-4">
                            <li>Provide, maintain, and improve the App;</li>
                            <li>Customize your experience on the App;</li>
                            <li>Communicate with you about the App and your account;</li>
                            <li>Monitor and analyze usage of the App;</li>
                            <li>Detect, prevent, and address technical issues and security vulnerabilities.</li>
                        </ul>
                    </div>
                    {/* Add more sections as needed */}
                    <div className="text-gray-700 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@pitchle.com" className="text-blue-600 hover:underline">contact@pitchle.com</a>.</p>
                    </div>
                    <p className="text-gray-700">
                        By accessing or using the App, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree to this Privacy Policy, you may not use the App.
                    </p>
                </div>
            </div>

        </>
    );
};

export default PrivacyPolicy;