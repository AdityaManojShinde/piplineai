'use client';

import React, { useEffect, useState } from "react";
import { Cpu, Code, Rocket, Workflow, Bot } from "../components/Icons";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-500 rounded-full animate-pulse-custom"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse-custom animation-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-purple-500 rounded-full animate-pulse-custom animation-delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-yellow-500 rounded-full animate-pulse-custom animation-delay-100"></div>
      </div>
      
      {/* Parallax CI/CD Pipeline Visualization */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block z-10 pointer-events-none">
        {/* Pipeline Path - Neon Line */}
        <div 
          className="absolute right-1/2 top-20 h-[70%] w-2 bg-green-500 rounded-full opacity-20 animate-neon-pulse-subtle"
          style={{ 
            transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 10}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Code Icon - Start of Pipeline */}
        <div 
          className="absolute right-[calc(50%+2rem)] top-24 opacity-70 animate-neon-pulse-subtle"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px) rotate(${mousePosition.y * 10}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Code className="h-16 w-16 text-green-500" />
        </div>
        
        {/* Bot Icon - AI Analysis */}
        <div 
          className="absolute right-[calc(50%-2rem)] top-[30%] opacity-70 animate-neon-pulse-subtle animation-delay-100"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) translateX(${mousePosition.x * -15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Bot className="h-16 w-16 text-green-500" />
        </div>
        
        {/* Workflow Icon - Pipeline Generation */}
        <div 
          className="absolute right-[calc(50%+2rem)] top-[45%] opacity-70 animate-neon-pulse-subtle animation-delay-200"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(${mousePosition.x * 15}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Workflow className="h-16 w-16 text-green-500" />
        </div>
        
        {/* Rocket Icon - Deployment */}
        <div 
          className="absolute right-[calc(50%-2rem)] top-[60%] opacity-70 animate-neon-pulse-subtle animation-delay-300"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) translateX(${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Rocket className="h-16 w-16 text-green-500" />
        </div>
        
        {/* Horizontal Connection Lines */}
        <div 
          className="absolute right-[calc(50%-1rem)] top-[30%] w-6 h-1 bg-green-500 rounded-full opacity-50 animate-neon-pulse-subtle animation-delay-100"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) scaleX(${1 + mousePosition.x * 0.5})`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className="absolute right-[calc(50%-1rem)] top-[45%] w-6 h-1 bg-green-500 rounded-full opacity-50 animate-neon-pulse-subtle animation-delay-200"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) scaleX(${1 - mousePosition.y * 0.5})`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className="absolute right-[calc(50%-1rem)] top-[60%] w-6 h-1 bg-green-500 rounded-full opacity-50 animate-neon-pulse-subtle animation-delay-300"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) scaleX(${1 + mousePosition.x * 0.5})`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Pulsing Dots - Data Flow */}
        <div className="absolute right-[calc(50%+0.5rem)] top-[25%] w-1 h-1 bg-green-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute right-[calc(50%+0.5rem)] top-[40%] w-1 h-1 bg-green-400 rounded-full animate-pulse-custom animation-delay-200"></div>
        <div className="absolute right-[calc(50%+0.5rem)] top-[55%] w-1 h-1 bg-green-400 rounded-full animate-pulse-custom animation-delay-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="relative pb-8 bg-transparent">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block animate-slide-left">
                  Intelligent CI/CD
                </span>
                <span className="block text-green-500 animate-slide-right animation-delay-200">
                  Powered by AI
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 animate-fade-in animation-delay-300">
                Revolutionize your development workflow with AI-driven CI/CD
                pipelines that learn from your team's patterns and optimize deployment processes.
              </p>
              
              {/* Feature highlights - reduced gap */}
              <div className="mt-2 flex flex-col sm:flex-row sm:justify-start sm:space-x-6 animate-fade-in animation-delay-500">
                <div className="flex items-center mb-1 sm:mb-0">
                  <Cpu className="h-5 w-5 text-green-500 mr-2 animate-float" />
                  <span className="text-gray-300 text-sm">Smart Automation</span>
                </div>
                <div className="flex items-center mb-1 sm:mb-0">
                  <Code className="h-5 w-5 text-green-500 mr-2 animate-float animation-delay-100" />
                  <span className="text-gray-300 text-sm">Intelligent Testing</span>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-5 w-5 text-green-500 mr-2 animate-float animation-delay-200" />
                  <span className="text-gray-300 text-sm">Rapid Deployment</span>
                </div>
              </div>
              
              <div className="mt-5 sm:mt-6 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow animate-fade-in animation-delay-300">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105">
                    Get started
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 animate-fade-in animation-delay-500">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105">
                    Live demo
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-10 pt-6 border-t border-gray-800 grid grid-cols-3 gap-4 text-center sm:text-left animate-fade-in animation-delay-500">
                <div>
                  <p className="text-green-500 text-2xl font-bold">40%</p>
                  <p className="text-gray-400 text-xs">Faster Deployments</p>
                </div>
                <div>
                  <p className="text-green-500 text-2xl font-bold">99.9%</p>
                  <p className="text-gray-400 text-xs">Uptime Guarantee</p>
                </div>
                <div>
                  <p className="text-green-500 text-2xl font-bold">24/7</p>
                  <p className="text-gray-400 text-xs">Expert Support</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
