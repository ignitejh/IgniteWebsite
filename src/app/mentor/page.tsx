
import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";

import "../team.css";
function Mentor() {
  return (
    <div className="team-main">
      <section>
        <h2>our Mentors</h2>
        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={khaliq} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>joss anderson</h3>
                <p>art director</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={khaliq} alt="James Newton" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>james newton</h3>
                <p>UX Designer</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={khaliq} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>oliver jones</h3>
                <p>web designer</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <Image
                src={khaliq}
                alt="Noah Wilson"
              />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>noah wilson</h3>
                <p>seo expert</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentor;
