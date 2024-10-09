import Image from "next/image";
import React from "react";
import domains from "../../assets/domains.svg";
import bg from "../../assets/domain page bg.svg";
import ignite from "../../assets/ignite logo.svg";
import jamia from "../../assets/jamia hamdard.svg";
import "./domain.css";

const page = () => {
  return (
    <div className="flex flex-1 relative justify-center items-center  gap-6 flex-col">
      {/* backgound */}
      <Image
        src={bg}
        alt="bg"
        className="absolute left-0 w-full right-0 -top-20 bottom-0 -z-10"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      />

      {/*  */}
      <Image
        src={ignite}
        alt="ignite"
        className="absolute -top-16 left-4 w-[70px]"
      />
      <Image
        src={jamia}
        alt="ignite"
        className="absolute -top-16 right-4 w-[60px]"
      />
      <Image
        src={domains}
        alt="domains"
        className="self-end "
        style={
          {
            // backgroundSize: '100%'
          }
        }
      />

      {/* domain card */}
      {/* <Image
                src={domainCard}
                alt='domain'
            /> */}
      <div className="max-w-[90%] min-h-[100px] min-w-[50%] flex-col flex flex-1 justify-center glassmorphism p-4 items-center ">
        <h2 className="text-[#C92842] text-[50px] leading-[72px] font-bold">
          Domain
        </h2>
        <p className="leading-[72px] text-center text-[40px] font-normal tracking-[11%] opacity-70">
          Domain Dive into the word of IGNITE where each 'domain' represents our
          vibrant focus areas: Networking, Startup Culture, Learning
          Initiatives, Research & Innovation and Project Development."
        </p>
      </div>

      <div className="domain-1">
        <div className="section-net"></div>
        <div className="section-details">
          <h3 className="head">Networking</h3>
          Networking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Qui ipsum cumque a sapiente et vitae natus! Ea aliquid necessitatibus
          blanditiis natus quas, modi nesciunt, rerum fugit molestias adipisci,
          ipsam quam!
        </div>
      </div>

      <div className="domain-2">
        <div className="section-details">
          <h3 className="head">Project Development</h3>
          Networking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Qui ipsum cumque a sapiente et vitae natus! Ea aliquid necessitatibus
          blanditiis natus quas, modi nesciunt, rerum fugit molestias adipisci,
          ipsam quam!
        </div>
        <div className="section-net"></div>
      </div>

      <div className="domain-3">
        <div className="section-net"></div>
        <div className="section-details">
          <h3 className="head">StartUp Culture</h3>
          Networking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Qui ipsum cumque a sapiente et vitae natus! Ea aliquid necessitatibus
          blanditiis natus quas, modi nesciunt, rerum fugit molestias adipisci,
          ipsam quam!
        </div>
      </div>

      <div className="domain-4">
        <div className="section-details">
          <h3 className="head">Learning Initiatives</h3>
          Networking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Qui ipsum cumque a sapiente et vitae natus! Ea aliquid necessitatibus
          blanditiis natus quas, modi nesciunt, rerum fugit molestias adipisci,
          ipsam quam!
        </div>
        <div className="section-net"></div>
      </div>

      <div className="domain-5">
        <div className="section-net"></div>
        <div className="section-details">
          <h3 className="head">Research & Innovation</h3>
          Networking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Qui ipsum cumque a sapiente et vitae natus! Ea aliquid necessitatibus
          blanditiis natus quas, modi nesciunt, rerum fugit molestias adipisci,
          ipsam quam!
        </div>
      </div>
    </div>
  );
};

export default page;
