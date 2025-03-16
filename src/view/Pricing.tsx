'use client';

import React, { useState } from "react";
import { CheckCircle } from "../components/Icons";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  buttonText,
  delay
}) => (
  <div 
    className={`rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
      highlighted 
        ? 'border-2 border-green-500 relative z-10' 
        : 'border border-gray-700'
    }`}
    style={{
      opacity: 0,
      animation: `fadeIn 0.6s ease-out ${delay * 0.001}s forwards`
    }}
  >
    {highlighted && (
      <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
        <span className="inline-flex rounded-full bg-green-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white shadow-lg">
          Most Popular
        </span>
      </div>
    )}
    <div className={`px-8 py-10 ${highlighted ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
      <div className="flex items-baseline text-white">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-medium">/month</span>
      </div>
      <p className="mt-5 text-gray-400 h-16">{description}</p>
    </div>
    <div className={`border-t border-gray-700 px-8 py-10 ${highlighted ? 'bg-gray-800' : 'bg-gray-900'} h-full`}>
      <ul className="space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircle className={`h-6 w-6 ${highlighted ? 'text-green-500' : 'text-green-400'}`} />
            </div>
            <p className="ml-3 text-base text-gray-300">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <button 
          className={`w-full px-6 py-4 rounded-lg text-base font-medium transition-all duration-300 shadow-lg ${
            highlighted 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const tiers: PricingTierProps[] = [
    {
      name: "Starter",
      price: annual ? "$49" : "$59",
      description: "Perfect for small teams and startups beginning their CI/CD journey.",
      features: [
        "Up to 5 team members",
        "10 concurrent builds",
        "Basic AI optimization",
        "Standard security scanning",
        "Email support",
        "7-day build history"
      ],
      buttonText: "Start Free Trial",
      delay: 100
    },
    {
      name: "Professional",
      price: annual ? "$99" : "$119",
      description: "Ideal for growing teams that need more power and flexibility.",
      features: [
        "Up to 15 team members",
        "25 concurrent builds",
        "Advanced AI optimization",
        "Enhanced security scanning",
        "Priority email support",
        "30-day build history",
        "Custom workflows",
        "API access"
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
      delay: 200
    },
    {
      name: "Enterprise",
      price: annual ? "$249" : "$299",
      description: "For organizations requiring maximum performance and dedicated support.",
      features: [
        "Unlimited team members",
        "Unlimited concurrent builds",
        "Premium AI optimization",
        "Advanced security & compliance",
        "24/7 phone & email support",
        "90-day build history",
        "Custom integrations",
        "Dedicated infrastructure",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      delay: 300
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-green-500 font-semibold tracking-wide uppercase text-lg"
            style={{ opacity: 0, animation: 'slideInFromLeft 0.5s ease-out forwards' }}>
            Pricing Plans
          </h2>
          <p className="mt-3 text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-5xl sm:leading-10"
            style={{ opacity: 0, animation: 'slideInFromRight 0.5s ease-out 0.1s forwards' }}>
            Plans for Teams of All Sizes
          </p>
          <p className="mt-5 max-w-2xl text-xl text-gray-400 mx-auto"
            style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out 0.2s forwards' }}>
            Choose the perfect plan to accelerate your development workflow with our AI-powered CI/CD platform.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-10 flex justify-center">
            <div className="relative bg-gray-800 p-1 rounded-lg inline-flex shadow-lg"
                 style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out 0.3s forwards' }}>
              <button
                onClick={() => setAnnual(true)}
                className={`${
                  annual ? 'bg-gray-700 text-white' : 'text-gray-400'
                } relative py-2 px-6 rounded-md transition-all duration-200 font-medium`}
              >
                Annual
                <span className={`${annual ? 'block' : 'hidden'} absolute -top-3 -right-3 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-500 text-white shadow-lg`}>
                  Save 20%
                </span>
              </button>
              <button
                onClick={() => setAnnual(false)}
                className={`${
                  !annual ? 'bg-gray-700 text-white' : 'text-gray-400'
                } relative py-2 px-6 rounded-md transition-all duration-200 font-medium`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier, index) => (
            <PricingTier 
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              highlighted={tier.highlighted}
              buttonText={tier.buttonText}
              delay={tier.delay}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center" style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out 0.4s forwards' }}>
          <p className="text-gray-400 mb-4 text-lg">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-gray-400 text-lg">Need a custom plan? <a href="#" className="text-green-500 hover:text-green-400 font-medium">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
