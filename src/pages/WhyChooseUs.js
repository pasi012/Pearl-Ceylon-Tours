import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/WhyChooseUs.css";

function WhyChooseUs() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const items = [
        {
            id: 1,
            title: "Qualified Drivers And Staff",
            desc: `Our large fleet of vehicles includes luxury and mini coaches, vans, cars and even limousines that operate 24 hours. Our drivers are friendly and well trained. Furthermore our expert local tour guides have extensive knowledge on an array of destinations and will share with you inside knowledge and firsthand experience on every location making your tour an ultimate one.`,
        },
        {
            id: 2,
            title: "No Hidden Charges",
            desc: "Not only is our charge affordable but also transparent. We keep our pricings clear and simple. The absence of hidden charges has helped us develop a good mutual understanding with our clients resulting in them finding confidence in the tour packages we offer at a fraction of cost than that they will have to incur elsewhere.",
        },
        {
            id: 3,
            title: "24/7 Support",
            desc: "Our customer service isn’t time bound. Travel agents at Pearl Ceylon Tours are always ready to serve you at anytime. Reach us at anytime of the day and you’re sure to be guided by our friendly travel consultants with effective solutions to your travel problems.",
        },
        {
            id: 4,
            title: "Value For Money",
            desc: "We don’t believe in a job half done. It’s not in our policies. We dig into the very last detail to make sure that our service is perfect. Travelling with Pearl Ceylon Tours will create an experience which you will treasure, a service with unmatched quality and a journey worth your money.",
        },
        {
            id: 5,
            title: "Instant Response",
            desc: "At Pearl Ceylon Tours we value time as much as you do. We dislike disappointing you with delays and forgotten inquiries which is why we strive to offer a service with instant response to your needs. From day one till your travel is complete and your feedback is heard we are in touch with you making sure everything you wanted your trip to be is just in their right places.",
        },
        {
            id: 6,
            title: "Flexibility",
            desc: "Our success story lies in offering our clients an itinerary that they find satisfaction in. This makes us open to be flexible and independent to listen to our customers requirements and plan accordingly. We see as to how we can use our expertise to tailor make something that you entrust that we can do.",
        },
        {
            id: 7,
            title: "Languages And Culture",
            desc: "At Pearl Ceylon Tours Communicating is made simple since personalized service to our clients are offered by multilingual customer service agent as you request with language proficiency in English, Japanese, Chinese, German, Russian, Arabic, French and Spanish. This ensures that with no doubt what is asked for is delivered.",
        },
        {
            id: 8,
            title: "100% Custom Made Service",
            desc: "When we say it’s a tailor made itinerary we are not bluffing. But, we really do sit down and make an effort to make sure that it’s a flawless trip that we are creating just for you. Regardless of it being a family tour or a honeymoon package we are not hesitant to take that extra mile in trying to reach perfectionism so that you would never think twice to come again to us.",
        },
        {
            id: 9,
            title: "Guaranteed Satisfaction",
            desc: "We are always there to help you with your travel plans but we do understand that some flaws can get in its way. That’s why we work till the very end making sure everything goes smooth. Your satisfaction is unconditional to us. Starting From the customer service we offer to every little detail about your vacation we guarantee that your feedback would be nothing but positive remarks about us.",
        },
    ];

    const [active, setActive] = useState(1);

    return (
        <>
            {/* Hero Section */}
            <section className="why-hero" data-aos="fade-down">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Why Choose Us</h1>
                        <p>Home &gt; Why Choose Us</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="why-wrapper" data-aos="fade-up">
                <div className="why-container">

                    {/* LEFT MENU */}
                    <div className="why-sidebar">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className={`why-nav-item ${active === item.id ? "active" : ""}`}
                                onClick={() => setActive(item.id)}
                            >
                                {String(item.id).padStart(2, "0")}. {item.title}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="why-content">
                        <h2>{items.find((i) => i.id === active)?.title}</h2>
                        <h3>Description:</h3>
                        <p>{items.find((i) => i.id === active)?.desc}</p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default WhyChooseUs;
