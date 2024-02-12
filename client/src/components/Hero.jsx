import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header
      className="w-full 
                flex 
                justify-center 
                items-center 
                flex-col"
    >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src="src/assets/bLogo.png"
          alt={logo}
          className="w-40 object-contain"
        />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Lucas8Machado/AI-Summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with AI
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Powerd By GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline reading with SIMPLI-SUM: An open-source article summarizer.
        Transform long articles into clear, concise insights. Elevate your
        understanding today.
      </h2>
    </header>
  );
};

export default Hero;
