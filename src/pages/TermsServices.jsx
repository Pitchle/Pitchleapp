import React from 'react';
import NavbarBar from "../components/NavbarBar";

const TermsService = () => {
    return (
        <>
            <NavbarBar/>
            <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Eligibility</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            You must be at least 18 years old to use the App. By accessing or using the App, you
                            represent and warrant that you are at least 18 years old and have the legal capacity to
                            enter into these Terms.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Account Registration</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            To access certain features of the App, you may be required to create an account. You agree
                            to provide accurate, current, and complete information during the registration process and
                            to update such information to keep it accurate, current, and complete.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Content</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            You are solely responsible for any content you post, upload, or otherwise make available on
                            the App ("User Content"). By submitting User Content, you grant <span translate="no">Pitchle</span> app a non-exclusive,
                            royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce,
                            modify, adapt, publish, translate, create derivative works from, distribute, and display
                            such User Content throughout the world in any media.
                        </p>
                        <p className="text-gray-700 text-justify mb-2">
                            You agree not to post User Content that is unlawful, defamatory, libelous, harassing,
                            abusive, threatening, harmful, obscene, profane, sexually explicit, or otherwise
                            objectionable.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Intellectual Property Rights</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            The App and its original content, features, and functionality are owned by <span translate="no">Pitchle</span> and are
                            protected by international copyright, trademark, patent, trade secret, and other
                            intellectual property or proprietary rights laws.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-justify text-gray-800 mb-4">5. Prohibited Activities</h2>
                        <p className="text-gray-700 mb-2">
                            You agree not to engage in any of the following prohibited activities:
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-700 text-justify mb-1">Use the App for any illegal or unauthorized purpose.</li>
                            <li className="text-gray-700 mb-1">Interfere with or disrupt the operation of the App or the
                                servers or networks connected to the App.
                            </li>
                            <li className="text-gray-700 text-justify mb-1">Use any robot, spider, scraper, or other automated means
                                to access the App for any purpose without our express written permission.
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Privacy</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and
                            disclose information about you. By using the App, you consent to the collection, use, and
                            disclosure of your information as described in the Privacy Policy.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Termination</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            We may terminate or suspend your access to the App immediately, without prior notice or
                            liability, for any reason whatsoever, including without limitation if you breach these
                            Terms.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Disclaimer</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            The App is provided on an "as is" and "as available" basis, without any warranties of any
                            kind, express or implied. [App Owner] does not warrant that the App will be error-free or
                            uninterrupted, that defects will be corrected, or that the App is free of viruses or other
                            harmful components.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            In no event shall [App Owner] be liable for any indirect, incidental, special,
                            consequential, or punitive damages, including without limitation, loss of profits, data,
                            use, goodwill, or other intangible losses, arising out of or in connection with your use of
                            the App.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            These Terms shall be governed by and construed in accordance with the laws of
                            [Jurisdiction], without regard to its conflict of law provisions.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to Terms</h2>
                        <p className="text-gray-700 text-justify mb-2">
                            We reserve the right to modify or replace these Terms at any time. If a revision is
                            material, we will provide at least 30 days' notice prior to any new terms taking effect.
                            What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </div>
                    <div className="text-gray-700">
                        <h2 className="text-2xl font-bold text-justify text-gray-800 mb-4">12. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at <a
                            href="mailto:contact@pitchle.com"
                            className="text-blue-600 hover:underline"><span translate="no">contact@pitchle.com</span></a>.</p>
                    </div>
                    <p className="text-gray-700 text-justify mt-8">
                        By accessing or using the App, you agree to be bound by these Terms. If you do not agree to
                        these Terms, you may not use the App.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TermsService;
