// // src/pages/Packages.js
// import React from "react";
// import "../css/Packages.css";
// import days7 from "../assets/7days.jpg";
// import days14 from "../assets/14days.jpg";
// import days21 from "../assets/21days.jpg";
// import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

// const Packages = () => {
//     const navigate = useNavigate(); // ✅ create navigate function

//     const packages = [
//         {
//             title: "7 DAYS",
//             description:
//                 "Enjoy a short and blissful stay with us as you embark on your journey of healing.",
//             inclusions: [
//                 "Doctor consultation",
//                 "2 treatments / per day according to the doctor's recommendation",
//                 "Medicine, as prescribed by the doctor",
//                 "24 hours doctor care",
//                 "24 hours nursing care",
//                 "1 yoga and meditation program",
//             ],
//             img: days7,
//         },
//         {
//             title: "14 DAYS",
//             description:
//                 "A more comprehensive programme, our experienced doctors will prescribe various treatments to suit your needs.",
//             inclusions: [
//                 "Full board accommodation (meal plan based on doctor’s recommendation)",
//                 "Daily doctor consultation",
//                 "2–3 treatments / per day",
//                 "Medicine, as prescribed by the doctor",
//                 "24 hours doctor & nursing care",
//                 "Yoga & meditation program",
//             ],
//             img: days14,
//         },
//         {
//             title: "21 DAYS",
//             description:
//                 "Our extended treatment programme offers holistic healing and revitalisation for long-lasting health benefits.",
//             inclusions: [
//                 "Full board accommodation",
//                 "Daily doctor consultation",
//                 "2–3 treatments / per day",
//                 "Medicine, as prescribed by the doctor",
//                 "24 hours doctor & nursing care",
//                 "Daily yoga & meditation sessions",
//                 "Specialised detox & rejuvenation therapies",
//             ],
//             img: days21,
//         },
//     ];

//     return (
//         <div className="packages-page">
//             {/* Header */}
//             <div className="packages-header">
//                 <h2>AYURVEDIC TREATMENTS & WELLNESS PACKAGES</h2>
//                 <p>
//                     At Winlion Hospital, each of our tailor made treatments has been
//                     specially designed to help you achieve your goals to heal, cleanse,
//                     revitalise and transform your mind and body.
//                 </p>
//                 <p>
//                     Our specialised packages vary in length as we wish to offer you a
//                     thorough treatment programme. Before you begin your treatment, you
//                     will initially have a consultation with any Ayurveda physician who
//                     will give a diagnosis and will specify the treatments you will
//                     undertake and determine how rigorous your schedule will be.
//                 </p>
//             </div>

//             {/* Grid */}
//             <div className="packages-grid">
//                 {packages.map((pkg, index) => (
//                     <div className="package-card" key={index}>
//                         <div className="package-image">
//                             <img src={pkg.img} alt={pkg.title} />
//                         </div>
//                         <div className="package-info">
//                             <h4>{pkg.title}</h4>
//                             <p>{pkg.description}</p>
//                             <h5>Inclusions</h5>
//                             <ul>
//                                 {pkg.inclusions.map((item, idx) => (
//                                     <li key={idx}>{item}</li>
//                                 ))}
//                             </ul>
//                             <div className="package-links">
//                                 <a href="#" className="read-more">
//                                     READ MORE
//                                 </a>
//                                 <button
//                                     className="book-now"
//                                     onClick={() => navigate("/booking")} // ✅ navigate to booking
//                                 >
//                                     BOOK NOW
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* WhatsApp Floating Button */}
//             <a
//                 href="https://wa.me/94762307765"
//                 className="whatsapp-fab"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
//                     alt="WhatsApp"
//                     className="whatsapp-icon"
//                 />
//             </a>
//         </div>
//     );
// };

// export default Packages;
