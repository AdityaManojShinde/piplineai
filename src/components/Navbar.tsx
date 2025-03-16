'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "./Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    
    // Ensure the element exists before scrolling
    const element = document.getElementById(id);
    if (element) {
      // Add a small delay to ensure the mobile menu closes first
      setTimeout(() => {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                <Rocket className="h-8 w-8 text-green-500 animate-float" />
                <span className="ml-2 text-white text-xl font-bold">PipelineAI</span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a 
                href="#features" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('features');
                }}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('pricing');
                }}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('testimonials');
                }}
              >
                Testimonials
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="btn-gray mr-4">Log in</button>
            <button className="btn-green">Sign up</button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-900/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            className="nav-link-mobile block"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('features');
            }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="nav-link-mobile block"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('how-it-works');
            }}
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="nav-link-mobile block"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('pricing');
            }}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="nav-link-mobile block"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('testimonials');
            }}
          >
            Testimonials
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <button className="btn-gray w-full mb-2">Log in</button>
          </div>
          <div className="flex items-center px-5 pb-2">
            <button className="btn-green w-full">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
