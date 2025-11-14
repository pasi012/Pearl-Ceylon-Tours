// import React from "react";
// import "../css/Booking.css";
// import reservationImg from "../assets/Reservation.jpg"; // Replace with your actual image path

// function Booking() {
//     return (
//         <div className="booking-page">
//             <section className="booking-header">
//                 <h2>RESERVATION FORM</h2>
//             </section>

//             <section className="booking-content">
//                 {/* Left: Form */}
//                 <div className="booking-form">
//                     <form>
//                         <div className="form-row">
//                             <input type="text" placeholder="Name" />
//                         </div>

//                         <div className="form-row">
//                             <input type="text" placeholder="Phone" />
//                             <input type="text" placeholder="Subject" />
//                         </div>

//                         <div className="form-row">
//                             <input type="email" placeholder="Email" />
//                             <select>
//                                 <option value="">Nationality</option>
//                                 <option value="Sri Lankan">Sri Lankan</option>
//                                 <option value="Foreign">Foreign</option>
//                             </select>
//                         </div>

//                         <div className="form-row">
//                             <select>
//                                 <option value="">Accommodation</option>
//                                 <option value="PREMIER">PREMIER ROOM</option>
//                                 <option value="DELUXE">DELUXE ROOM</option>
//                                 <option value="STANDARD">STANDARD ROOM</option>
//                             </select>
//                             <select>
//                                 <option value="">Package Type</option>
//                                 <option value="7 Days">7 Days</option>
//                                 <option value="14 Days">14 Days</option>
//                                 <option value="21 Days">21 Days</option>
//                                 <option value="28 Days">28 Days</option>
//                                 <option value="CUSTOMIZE">CUSTOMIZE YOUR AYURVEDA PACKAGE</option>
//                             </select>
//                         </div>

//                         {/* Check In & Check Out */}
//                         <div className="form-row">
//                             <label>
//                                 Check In:
//                                 <input type="date" />
//                             </label>
//                             <label>
//                                 Check Out:
//                                 <input type="date" />
//                             </label>
//                         </div>

//                         <textarea placeholder="Message"></textarea>

//                         <div className="checkbox-row">
//                             <input type="checkbox" id="agree" />
//                             <label htmlFor="agree">
//                                 In submitting this inquiry, I confirm that I have read the refund & cancelation policy of this website.
//                             </label>
//                         </div>

//                         <button type="submit">SUBMIT</button>
//                     </form>
//                 </div>

//                 {/* Right: Image */}
//                 <div className="booking-image">
//                     <img src={reservationImg} alt="Reservation" />
//                 </div>
//             </section>

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
// }

// export default Booking;
