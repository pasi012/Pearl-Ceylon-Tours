// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import "../css/Contact.css";
// import contactImg from "../assets/contact-bg.jpg";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_kju71jd", // 🔹 Replace with your EmailJS Service ID
//         "template_fo9r3f6", // 🔹 Replace with your EmailJS Template ID
//         form.current,
//         "8WYYhdR2nLvkJhCZX"   // 🔹 Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("✅ Message sent successfully!");
//           e.target.reset(); // clear form after submission
//         },
//         (error) => {
//           console.log(error.text);
//           alert("❌ Failed to send message. Please try again!");
//         }
//       );
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-header">
//         <h2>CONTACT US</h2>
//         <p>
//           Your transformative journey of Ayurvedic healing is only one call away.
//           Reservations can be made on our website, via email, or by calling us.
//         </p>
//       </div>

//       <div className="contact-container">
//         <div className="contact-left">
//           <img src={contactImg} alt="Contact" className="contact-img" />
//           <div className="contact-details">
//             <h4>CONTACT DETAILS</h4>
//             <p>395/4, Harischandra Mawatha, Anuradhapura, Sri Lanka</p>
//             <p><strong>GENERAL NUMBER:</strong> +94 25 2030200</p>
//             <p><strong>RESERVATION NUMBER:</strong> +94 704 725 634</p>
//             <p><strong>EMAIL ADDRESS:</strong> reservations@adhitya.lk</p>
//             <div className="social-icons">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-youtube"></i></a>
//               <a href="#"><i className="fab fa-linkedin-in"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//             </div>
//           </div>
//         </div>

//         <div className="contact-right">
//           <form ref={form} onSubmit={sendEmail}>
//             <div className="form-row">
//               <input type="text" name="name" placeholder="Name" required />
//               <input type="text" name="subject" placeholder="Subject" required />
//             </div>
//             <div className="form-row">
//               <input type="text" name="phone" placeholder="Phone" required />
//               <input type="email" name="email" placeholder="Email" required />
//             </div>
//             <textarea name="message" placeholder="Message" rows="5" required></textarea>

//             <div className="form-check">
//               <input type="checkbox" id="policy" required />
//               <label htmlFor="policy">
//                 In submitting this inquiry, I confirm that I have read the{" "}
//                 <strong>Refund & Cancellation Policy</strong> of this website.
//               </label>
//             </div>

//             <button type="submit" className="submit-btn">SUBMIT</button>
//           </form>
//         </div>
//       </div>

//       <div className="contact-map">
//         <iframe
//           title="Adhitya Ayurveda Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12673.6116!2d80.4101!3d8.3114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf57394a5b5b1%3A0x9e0b1e3e5b7a!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1631000000000"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       <a
//         href="https://wa.me/94762307765"
//         className="whatsapp-fab"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
//           alt="WhatsApp"
//           className="whatsapp-icon"
//         />
//       </a>
//     </div>
//   );
// }

// export default Contact;
