"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center">

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-4">
            <a href="https://github.com/AreebaZafarChohan/Node-Projects.git" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-black p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaGithub />
          </a>
          <a href="mailto:areebazafar715@gmail.com" className="transition-transform transform hover:scale-110 hover:text-blue-800 p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/arenab_bazar?igsh=YmNtamVhNGlhaDY0" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 p-2 hover:text-pink-700 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/areeba-zafar-973917303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIJHCvgutQCKAZjoSHjrRig%3D%3D" target="_blank" rel="nooper noreferrer" className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white" style={{fontSize: "2rem"}}>
            <FaLinkedin />
          </a>
        </div>
        { /* Rights Reserved */ }
        <p className="text-sm mt-6 text-white font-semibold"> &copy; {new Date().getFullYear()} Areeba Zafar | All Rights Reserved</p>
      </div>
    </footer>
  );
};


export default Footer;
