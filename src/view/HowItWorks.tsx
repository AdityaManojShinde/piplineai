'use client';

import React from "react";
import { Workflow, Code, Rocket, Bot, ArrowRight } from "../components/Icons";

interface StepProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  step: number;
}

const Step: React.FC<StepProps> = ({ icon: Icon, title, description, step }) => (
  <div className="relative">
    {/* Step number */}
    <div className="absolute left-0 -ml-3 mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm animate-pulse-custom">
      {step}
    </div>
    
    <div className="ml-8 pb-12 animate-fade-in animation-delay-300">
      <div className="flex items-center mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-green-500 bg-opacity-10 mr-3">
          <Icon className="h-6 w-6 text-green-500 animate-float" />
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-gray-400 ml-0">{description}</p>
    </div>
    
    {/* Removed connector line */}
  </div>
);

const HowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      icon: Bot,
      title: "AI Analysis",
      description: "Our AI engine analyzes your codebase, infrastructure, and team workflows to identify optimization opportunities.",
      step: 1
    },
    {
      icon: Workflow,
      title: "Pipeline Generation",
      description: "Based on the analysis, we generate a custom CI/CD pipeline tailored to your project's specific needs.",
      step: 2
    },
    {
      icon: Code,
      title: "Continuous Optimization",
      description: "As your team works, our system learns from your patterns and continuously refines the pipeline for maximum efficiency.",
      step: 3
    },
    {
      icon: Rocket,
      title: "Accelerated Delivery",
      description: "Experience faster deployments, fewer errors, and improved collaboration across your development team.",
      step: 4
    }
  ];

  return (
    <div id="how-it-works" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase animate-slide-left">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl animate-slide-right animation-delay-100">
            Streamlined CI/CD with AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto animate-fade-in animation-delay-200">
            Our intelligent platform transforms your development workflow in four simple steps.
          </p>
        </div>

        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="relative">
              {steps.slice(0, 2).map((step) => (
                <Step 
                  key={step.step} 
                  icon={step.icon} 
                  title={step.title} 
                  description={step.description} 
                  step={step.step} 
                />
              ))}
            </div>
            <div className="relative mt-10 lg:mt-0">
              {steps.slice(2, 4).map((step) => (
                <Step 
                  key={step.step} 
                  icon={step.icon} 
                  title={step.title} 
                  description={step.description} 
                  step={step.step} 
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center animate-fade-in animation-delay-500">
            <p className="text-gray-400 mb-4">Ready to transform your development workflow?</p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
