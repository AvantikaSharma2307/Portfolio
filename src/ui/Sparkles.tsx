"use client";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SparklesCore } from "./Background";
import { TypewriterEffectSmoothDemo } from "./Typewritersmootheffect";

export function SparklesPreview() {
  return (
    <div className="h-screen relative w-full bg-black flex items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full px-5 md:px-10">
        {/* Text section */}
        <div className="ml-0 md:ml-10 flex flex-col items-center md:items-start"> 
          <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-white mb-4 text-center md:text-left">
            <TypewriterEffectSmoothDemo />
          </h1>
        </div>
        
        {/* Animation section */}
        <div className="flex-shrink-0 hidden md:block mt-8 md:mt-0"> 
          <DotLottieReact
            src="https://lottie.host/fa685228-52b1-4ddf-8b90-487ff3011455/ZLXoojnCS7.json"
            className="h-64 md:h-80 lg:h-96 mx-auto md:mx-0"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
