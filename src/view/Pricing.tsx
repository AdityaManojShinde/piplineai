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
    className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-${delay} ${
      highlighted 
        ? 'border-2 border-green-500 relative' 
        : 'border border-gray-800'
    }`}
  >
    {highlighted && (
      <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
        <span className="inline-flex rounded-full bg-green-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white animate-pulse-custom">
          Most Popular
        </span>
      </div>
    )}
    <div className={`px-6 py-8 ${highlighted ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-baseline text-white">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-medium">/month</span>
      </div>
      <p className="mt-4 text-gray-400">{description}</p>
    </div>
    <div className={`border-t border-gray-800 px-6 py-8 ${highlighted ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircle className={`h-6 w-6 ${highlighted ? 'text-green-500' : 'text-green-400'}`} />
            </div>
            <p className="ml-3 text-base text-gray-300">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <button 
          className={`w-full px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
            highlighted 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
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
      delay: 0
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
      delay: 100
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
      delay: 200
    }
  ];

  return (
    <div id="pricing" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase animate-slide-left">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl animate-slide-right animation-delay-100">
            Plans for Teams of All Sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto animate-fade-in animation-delay-200">
            Choose the perfect plan to accelerate your development workflow.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative bg-gray-800 p-1 rounded-lg inline-flex animate-fade-in animation-delay-300">
              <button
                onClick={() => setAnnual(true)}
                className={`${
                  annual ? 'bg-gray-700 text-white' : 'text-gray-400'
                } relative py-2 px-4 rounded-md transition-all duration-200`}
              >
                Annual
                <span className={`${annual ? 'block' : 'hidden'} absolute -top-3 -right-3 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-500 text-white`}>
                  Save 20%
                </span>
              </button>
              <button
                onClick={() => setAnnual(false)}
                className={`${
                  !annual ? 'bg-gray-700 text-white' : 'text-gray-400'
                } relative py-2 px-4 rounded-md transition-all duration-200`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
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
        
        <div className="mt-16 text-center animate-fade-in animation-delay-400">
          <p className="text-gray-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-gray-400">Need a custom plan? <a href="#" className="text-green-500 hover:text-green-400">Contact our sales team</a></p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
