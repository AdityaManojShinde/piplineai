'use client';

import React from "react";
import { Cpu, Code, Rocket, Shield, Zap, ChartBar, Cloud, Users, Settings } from "../components/Icons";

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <div className={`p-6 border border-gray-800 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in animation-delay-${delay}`}>
    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-500 bg-opacity-10 mb-4">
      <Icon className="h-6 w-6 text-green-500 animate-float" />
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

interface FeatureItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay: number;
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Our AI engine analyzes your codebase to identify optimal CI/CD strategies tailored to your project's unique needs.",
      delay: 0
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Automate repetitive tasks with smart workflows that adapt to your team's development patterns.",
      delay: 100
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Built-in security scanning identifies vulnerabilities before they reach production environments.",
      delay: 200
    },
    {
      icon: Code,
      title: "Smart Testing",
      description: "Prioritize tests based on code changes to reduce build times while maintaining comprehensive coverage.",
      delay: 300
    },
    {
      icon: ChartBar,
      title: "Performance Insights",
      description: "Get detailed metrics on your deployment performance and actionable recommendations for improvement.",
      delay: 400
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Support",
      description: "Deploy seamlessly across AWS, Azure, Google Cloud, and other major cloud providers.",
      delay: 500
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for code reviews, approvals, and team communication streamline your workflow.",
      delay: 600
    },
    {
      icon: Settings,
      title: "Customizable Workflows",
      description: "Create custom pipelines with our intuitive visual editor or use our library of pre-built templates.",
      delay: 700
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Reduce deployment time by up to 40% with optimized build processes and parallel execution.",
      delay: 800
    }
  ];

  return (
    <div id="features" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase animate-slide-left">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl animate-slide-right animation-delay-100">
            Supercharge Your CI/CD Pipeline
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto animate-fade-in animation-delay-200">
            Our platform combines the power of AI with modern DevOps practices to deliver a seamless development experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              delay={feature.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-900">
            <Zap className="mr-2 h-5 w-5" />
            Explore All Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
