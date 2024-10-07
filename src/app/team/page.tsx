import React from "react";
import Image from "next/image";
import khaliq from "../../assets/khalique1.jpg";
import "./team.css"
import { teams } from "@/utils/constant";
function Team() {
  return (
    <div className="team-container">
    <div className="team">
    {teams.map((item, index) => (
      <div className="card" key={index}>
        <div className="card-inner">
          <div className="card-front">
            {/* <!-- Front content --> */}
            <Image src={khaliq} alt="khaliq" />
          </div>
          <div className="card-back">
            <div className="overlay"></div>
            <h1>{item.name}</h1>
            <p>Experience a new era of technology and innovation.</p>
            <a href="#" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
       ))}
    </div>
    </div>
  );
}

export default Team;
