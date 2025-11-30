import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/TermsAndCondition.css";

function TermsAndCondition() {

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const items = [
        {
            id: 1,
            title: "General Terms & Conditions",
            desc: `Welcome to wwwcaptainceylontours.com Travels provides services to its valued customers under the following conditions. Access to and use of this website is conditioned on your acceptance of these terms and conditions. Please read the following general terms and conditions carefully before using our website. If you do not agree with any part of these terms and conditions, please do not use this website. We reserve the right to change these terms and conditions in accordance with changes in existing internal and external policies (government policies / changes in the policies of private institutions). Any changes will take effect upon publication on the website, and it will be your responsibility to read them each time you visit the site, as you will be bound by the latest version of the terms and conditions. We will make all reasonable efforts to ensure that the information provided is free from errors and omissions and to correct any errors or omissions as soon as we are informed of them. However, we cannot be held responsible for misinformation that no reasonable person could have expected us to know. <br/><br/>
                   Our opinions are our own. Whilst we rigorously strive for accuracy, these opinions are necessarily subject to some degree. Occasionally, temporary local circumstances -- for example, emergency maintenance work, power cuts or off-season closure – can make advertised facilities unavailable. We do not take responsibility for consumer comments made in interactive areas of the site.`,
        },
        {
            id: 2,
            title: "General Reminder",
            desc: `The programme is based on the availability of the hotel rooms at the time of forwarding the quotation. As such, rooms are subject to availability at the time of booking. <br/><br/>
                   Due to high occupancy / demand, the hotels accept only the confirmed bookings. <br/><br/>
                   In case of any price fluctuations due to change of hotels, we will send a revised quotation.`,
        },
        {
            id: 3,
            title: "Hotel Rules and Regulations",
            desc: `The official check-in time at all hotels will be 12:00pm to 02:00pm (depends on the hotel).<br/><br/>
                   The official check-out time at all hotels will be 11:00am.<br/><br/>
                   Hotel check-in / check-out times are fixed and there are no guarantees for early / late check-in / out unless paid for.`,
        },
        {
            id: 4,
            title: "Booking Your Holiday",
            desc: `All bookings must be made through an authorized representative of the Company. At the time of booking the Company booking form must be completed and submitted together with a deposit of 50% of the total cost of the booking<br/><br/>
                   Your holiday must be paid in full at least 15 days before the departure date. If payment is not received by the due date, the Company reserves the right to cancel the booking and retain the deposit. If you book within 30 days of your departure date payment must be made in full at the time of booking.<br/><br/>
                   All special requests, such as dietary requirements, should be noted on the booking form.<br/><br/>
                   The Company will provide the service as set out and confirmed in writing.`,
        },
        {
            id: 5,
            title: "Payment Policy",
            desc: `“Services” refers to any one or more of the following; (a) Transport (b) Accommodation (c) Other tourist services.<br/><br/>
                   Booking details must be completed personally by the traveller or by one person on behalf of a group who is deemed authorized by individual members (the “Client”) of the Group to contract on their behalf<br/><br/>
                   We will confirm the arrangements requested by the Client through web bookings as soon as reasonably possible upon receipt of the Booking details<br/><br/>
                   The Client is responsible for checking the details of the confirmation invoice and should give immediate notice of any corrections thereto`,
        },
        {
            id: 6,
            title: "Amendments to the Itinerary by the Passenger",
            desc: `After confirmation, if the Client wishes to change the dates or nature of Services, an application to do so may be made on the website and shall endeavor to accommodate such changes at the least cost to the Client. The Client shall be responsible for all extra costs of such change.<br/><br/>
                   No credits or refunds for unused services shall be given if the Client fails to avail him/herself of the confirmed tour arrangements.`,
        },
        {
            id: 7,
            title: "General Terms and Conditions",
            desc: `The rates are net and include all government taxes totaling to 13%.<br/><br/>
                   These rates are subject to current government taxes. If any taxes are revised including VAT, the rates quoted will be revised accordingly.<br/><br/>
                   Discount for children from 02 to 12 years sharing the parents’ room: 30% per-person sharing double room rate.<br/><br/>
                   Discount for the third person sharing a triple room: 10% per person sharing double room rate.<br/><br/>
                   <strong>** Please note that the extra bed in a triple room will be a foldable and rollaway bed</strong>`,
        },
        {
            id: 8,
            title: "Cancellation Charges",
            desc: `21 days or less – 100% cancellation charge<br/><br/>
                   Between 22 days and 28 days – 50% cancellation charges or the equivalent of the first two days of charges depending on the programme and period of stay<br/><br/>
                   Above 29 days – No cancellation charges provided no commitment or advances are made to third parties`,
        },
        {
            id: 9,
            title: "Copyright and Restrictions on Use",
            desc: `All trademarks, copyright, and other intellectual property rights in materials on this website, as well as the organisation and layout of this website together with the underlying software, belong to The Ceylon Expeditions Travels `,
        },
        {
            id: 10,
            title: "Privacy Policy",
            desc: `At Captain Ceylon Tours, we are committed to protecting the privacy and security of our clients’ personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or make an inquiry. By using our website, you consent to the practices described in this policy.
            <strong>Information We Collect</strong><br/>
            When you visit our website or make an inquiry, we may collect certain information about you, including: Personal identification information (such as your name, email address, phone number) provided voluntarily by you during inquiries or booking requests. Travel-related details, including preferences and special requests, necessary to tailor our services to your needs. Browsing information, such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies.<br/><br/>
            <strong>Use of Information</strong><br/>
            We may use the collected information for the following purposes: To respond to your inquiries and provide personalized travel services. To process bookings, reservations, and fulfill travel arrangements, including communication with service providers like hotels, transport services, and tour operators. To communicate with you regarding your travel plans, provide customer support, and respond to any additional requests. To improve our website, services, and user experience based on your feedback and browsing patterns. To detect and prevent fraud, unauthorized activities, or misuse of our website.<br/><br/>
            <strong>Information Sharing</strong><br/>
            We respect your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:<br/><br/>
            <strong>Trusted service providers:</strong><br/>
            We may share your information with third-party service providers who assist us in processing your travel bookings, payments, and delivering services. These providers are contractually obligated to handle your data securely and confidentially.<br/><br/>
            <strong>Legal requirements:</strong><br/>
            We may disclose your information if required by law or in response to valid legal requests or orders.<br/><br/>
            <strong>Data Security</strong><br/>
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.<br/><br/>
            <strong>Cookies and Tracking Technologies</strong><br/>
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about your preferences and interactions with our website. You have the option to disable cookies through your browser settings, but this may limit certain features and functionality of our website.<br/><br/>
            <strong>Changes to the Privacy Policy</strong><br/>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised “last updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.<br/><br/>
            <strong>Contact Us</strong><br/>
            If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us using the information provided on our website.<br/><br/>
            <strong>Email: pearlceylontours01@gmail.com</strong><br/>`,
        },
    ];

    const [active, setActive] = useState(1);

    return (
        <div className="tc-container">
            {/* HERO SECTION */}
            <section className="tc-hero" data-aos="fade-down">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Terms & Condition</h1>
                        <p>Home &gt; Terms & Condition</p>
                    </div>
                </div>
            </section>

            {/* MAIN SECTION */}
            <section className="tc-wrapper" data-aos="fade-up">
                <div className="tc-container">

                    {/* LEFT MENU */}
                    <div className="tc-sidebar">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className={`tc-nav-item ${active === item.id ? "active" : ""}`}
                                onClick={() => setActive(item.id)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="tc-content">
                        <h2>{items.find((i) => i.id === active)?.title}</h2>
                        <h3>Description:</h3>
                        <div
                            className="desc"
                            dangerouslySetInnerHTML={{
                                __html: items.find((i) => i.id === active)?.desc || ""
                            }}
                        ></div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default TermsAndCondition;
