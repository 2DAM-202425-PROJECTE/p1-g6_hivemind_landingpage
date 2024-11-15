import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="relative flex flex-col items-start justify-start text-white hivemind-hero-section mt-10">
            <div className="hero-background"/>
            <div className="w-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
                <div className="container mx-auto p-6">
                    <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p>
                            This privacy policy explains how we collect, use, disclose, and protect your personal
                            information when
                            you visit our website or use our services. We encourage you to read it carefully to
                            understand
                            our
                            practices regarding your personal data.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
                        <p>
                            We collect various types of information depending on how you interact with us, including:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Personally identifiable information, such as your name, email address, etc.</li>
                            <li>Usage data, such as IP address, browser type, etc.</li>
                            <li>Cookie information (as described in our cookie policy).</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
                        <p>
                            We use the information collected for the following purposes:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>To provide and personalize our services.</li>
                            <li>To improve website functionality and user experience.</li>
                            <li>To send communications related to your account or requested services.</li>
                            <li>To comply with our legal obligations.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">How We Protect Your Information</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information from
                            unauthorized access, alteration, or disclosure.
                            However, you should be aware that no data transmission over the Internet or electronic
                            storage
                            is completely secure.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
                        <p>
                            We do not share your personal information with third parties, except in the following cases:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>With service providers who help us operate our website.</li>
                            <li>To comply with legal requirements or respond to government requests.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete the personal information we have collected
                            about you. You can also object to certain
                            uses of your personal information, such as direct marketing.
                        </p>
                        <p>
                            If you wish to exercise any of these rights, you can contact us through the means provided
                            at
                            the end of this policy.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any important
                            changes
                            by posting the new policy
                            on this page. We recommend reviewing this policy periodically.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                        <p>
                            If you have any questions or concerns about this privacy policy, please contact us at:
                        </p>
                        <address className="font-semibold">
                            hivemind@nexxus.com<br/>
                            Calle Falsa 123, Tortosa, Spain
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
};

            export default PrivacyPolicy;
