"use client";
import { AiFillRedditSquare } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import bg from "../../assets/illustr.png";
import mascott from "../../assets/mascott.png";
import Image from "next/image";

import "./contact.css";
export default function Contact() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7b851046-dff6-4ece-ad42-e6535c220a6a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      event.target.reset(); // Reset form after successful submission
    }
  }

  return (
    <div className="img-container">
      <div className="contact">
        <div className="container">
          <Image src={bg} alt="contact" className="contact-img" />
          
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-input"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="contact-input"
          ></textarea>
          <button type="submit" className="custom-btn btn-5">
            Submit
          </button>
        </form>
      </div>
      <div className="contact">
        <div className="container2">
          <div>
            <h1 className="contact-heading">Contact Us</h1>
            <ul className="contact-ul1">
              <li className="li">
                <FaLocationDot className="contact-icon" size={25} />
                Jamia Hamdard Delhi
              </li>
              <li className="li">
                <IoIosMail className="contact-icon" size={25} /> Email Us:
                ignitesociety.jh@gmail.com
              </li>
              <li className="li">
                <FaPhoneAlt className="contact-icon" size={25} />
                Contact Us: 9999999
              </li>
            </ul>
            <h1 className="contact-heading">Follow on </h1>
            <ul className="contact-ul">
              <li>
                <a href="#">
                  <FaLinkedin className="contact-social" size={40} />
                </a>
              </li>
              <li>
                <a href="#">
                  <SlSocialInstagram className="contact-social" size={40} />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillRedditSquare className="contact-social" size={40} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareXTwitter className="contact-social" size={40} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitch className="contact-social" size={40} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube className="contact-social" size={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image src={mascott} alt="contact" className="contact-img2" />
        </div>
      </div>
    </div>
  );
}
